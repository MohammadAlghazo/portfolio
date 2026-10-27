const fs = require('node:fs/promises');
const path = require('node:path');
const { createRequire } = require('node:module');
const { PROJECTS } = require('./project-data.cjs')();
const sourceRoot = path.resolve(__dirname, '..');
const root = process.env.PORTFOLIO_MEDIA_OUTPUT
  ? path.resolve(process.env.PORTFOLIO_MEDIA_OUTPUT)
  : sourceRoot;

function sharpLibrary() {
  const locations = [
    sourceRoot,
    process.env.PORTFOLIO_IMAGE_RUNTIME,
    process.env.USERPROFILE &&
      path.join(
        process.env.USERPROFILE,
        '.cache/codex-runtimes/codex-primary-runtime/dependencies/node',
      ),
  ].filter(Boolean);
  for (const location of locations) {
    try {
      return createRequire(path.join(location, 'package.json'))('sharp');
    } catch {}
  }
  throw new Error(
    'Sharp was not found. Set PORTFOLIO_IMAGE_RUNTIME to a directory whose node_modules contains sharp.',
  );
}

(async () => {
  const inputRoot = path.resolve(process.argv[2] || path.join(root, 'project-images'));
  const sharp = sharpLibrary();
  const { PROJECT_MEDIA: existing } = require('./project-data.cjs')('project-media');
  const media = { ...existing };
  const report = [];
  for (const project of PROJECTS) {
    const directory = path.join(inputRoot, project.slug);
    let entries;
    try {
      entries = await fs.readdir(directory);
    } catch {
      continue;
    }
    const names = entries.filter((name) => /\.(png|jpe?g|webp|avif)$/i.test(name)).sort();
    let notes = {};
    try {
      notes = JSON.parse(await fs.readFile(path.join(directory, 'captions.json'), 'utf8'));
    } catch {}
    const gallery = [];
    let cover;
    for (const filename of names) {
      const input = path.join(directory, filename);
      const info = await sharp(input, { limitInputPixels: 180000000 }).metadata();
      const stem = path.parse(filename).name;
      if (!/^[a-z0-9-]+$/i.test(stem))
        throw new Error('Use letters, numbers, and hyphens for image filenames: ' + filename);
      const rotated = info.autoOrient || info;
      const width = rotated.width || info.width;
      const height = rotated.height || info.height;
      if (!width || !height) throw new Error('Image dimensions could not be read: ' + filename);
      const output = path.join(root, 'public/projects', project.slug);
      await fs.mkdir(output, { recursive: true });
      const widths = [...new Set([640, 1280, 1920].filter((w) => w < width).concat(width))];
      const variants = [];
      for (const size of widths) {
        const name = stem + '-' + size + '.webp';
        await sharp(input, { limitInputPixels: 180000000 })
          .rotate()
          .resize({ width: size, withoutEnlargement: true })
          .webp({ lossless: true, effort: 6 })
          .toFile(path.join(output, name));
        variants.push({ width: size, src: '/projects/' + project.slug + '/' + name });
      }
      const selected = variants.find((v) => v.width >= 1280) || variants[variants.length - 1];
      const item = {
        src: selected.src,
        srcset: variants.map((v) => v.src + ' ' + v.width + 'w').join(', '),
        width,
        height,
        alt:
          notes[stem]?.alt ||
          project.name + ' — ' + (stem === 'cover' ? 'website overview' : stem.replace(/-/g, ' ')),
        ...(notes[stem]?.caption ? { caption: notes[stem].caption } : {}),
      };
      if (stem === 'cover') cover = item;
      else gallery.push(item);
      const sourceBytes = (await fs.stat(input)).size;
      const fullBytes = (
        await fs.stat(path.join(root, 'public', variants[variants.length - 1].src))
      ).size;
      report.push({
        project: project.slug,
        file: filename,
        sourceBytes,
        losslessFullBytes: fullBytes,
        width,
        height,
      });
    }
    media[project.slug] = { ...(cover ? { cover } : {}), ...(gallery.length ? { gallery } : {}) };
  }
  await fs.mkdir(path.join(root, 'src/app/data'), { recursive: true });
  await fs.writeFile(
    path.join(root, 'src/app/data/project-media.ts'),
    "import { ProjectImage } from './projects';\n\nexport interface ProjectMedia { cover?: ProjectImage; gallery?: ProjectImage[]; }\n\nexport const PROJECT_MEDIA: Record<string, ProjectMedia> = " +
      JSON.stringify(media, null, 2) +
      ';\n',
  );
  await fs.mkdir(path.join(root, 'tmp'), { recursive: true });
  await fs.writeFile(path.join(root, 'tmp/image-report.json'), JSON.stringify(report, null, 2));
  console.log(
    'Prepared ' +
      report.length +
      ' images. Original files were not changed. Full-resolution outputs use lossless WebP.',
  );
})().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
