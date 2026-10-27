const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { createRequire } = require('node:module');
const root = path.resolve(__dirname, '..');

(async () => {
  const runtime =
    process.env.PORTFOLIO_IMAGE_RUNTIME ||
    path.join(
      process.env.USERPROFILE,
      '.cache/codex-runtimes/codex-primary-runtime/dependencies/node',
    );
  const sharp = createRequire(path.join(runtime, 'package.json'))('sharp');
  sharp.cache(false);
  const tempRoot = path.join(root, 'tmp');
  await fs.mkdir(tempRoot, { recursive: true });
  const fixture = await fs.mkdtemp(path.join(tempRoot, 'image-check-'));
  assert.ok(path.resolve(fixture).startsWith(path.resolve(tempRoot) + path.sep));
  try {
    const input = path.join(fixture, 'input/place-on');
    await fs.mkdir(input, { recursive: true });
    const source = path.join(input, 'cover.png');
    await sharp({ create: { width: 1024, height: 768, channels: 4, background: '#85621b' } })
      .png()
      .toFile(source);
    const original = await fs.readFile(source);
    const output = path.join(fixture, 'output');
    const run = spawnSync(
      process.execPath,
      [path.join(__dirname, 'prepare-images.cjs'), path.dirname(input)],
      { env: { ...process.env, PORTFOLIO_MEDIA_OUTPUT: output }, encoding: 'utf8' },
    );
    assert.equal(run.status, 0, run.stderr);
    const generated = path.join(output, 'public/projects/place-on');
    assert.deepEqual((await fs.readdir(generated)).sort(), ['cover-1024.webp', 'cover-640.webp']);
    assert.deepEqual(
      await sharp(source).ensureAlpha().raw().toBuffer(),
      await sharp(path.join(generated, 'cover-1024.webp')).ensureAlpha().raw().toBuffer(),
    );
    assert.deepEqual(await fs.readFile(source), original);
    const manifest = await fs.readFile(path.join(output, 'src/app/data/project-media.ts'), 'utf8');
    assert.ok(manifest.includes('640w') && manifest.includes('1024w'));
    assert.ok(!manifest.includes('1920w'));
    console.log(
      'PASS: full-resolution pixel equality, responsive variants, no upscaling, unchanged originals, isolated output.',
    );
  } finally {
    await fs.rm(fixture, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
