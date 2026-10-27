const fs = require('node:fs/promises');
const path = require('node:path');
const { PROJECTS } = require('./project-data.cjs')();
const { PROJECT_MEDIA } = require('./project-data.cjs')('project-media');
const origin = 'https://mohammadalghazo.dev';
const out = path.resolve(__dirname, '../dist/portfolio/browser');
const escape = (value) =>
  value.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );

(async () => {
  const template = await fs.readFile(path.join(out, 'index.html'), 'utf8');
  const person = {
    '@type': 'Person',
    '@id': origin + '/#person',
    name: 'Mohammad Fathi Alghazo',
    url: origin,
    jobTitle: 'Full-stack Software Engineer',
    sameAs: [
      'https://www.linkedin.com/in/mohammad-alghazo-106506288/',
      'https://github.com/MohammadAlghazo',
    ],
  };
  const schema = (object) =>
    '<script type="application/ld+json">' +
    JSON.stringify(object).replace(/</g, '\\u003c') +
    '</script>';
  for (const project of PROJECTS) {
    const url = origin + '/projects/' + project.slug;
    const image = new URL(PROJECT_MEDIA[project.slug]?.cover?.src || '/og-image.png', origin).href;
    const title = project.name + ' — Project by Mohammad Alghazo';
    let html = template.replace(/<title>.*?<\/title>/, '<title>' + escape(title) + '</title>');
    for (const [attribute, key, content] of [
      ['name', 'description', project.summary],
      ['property', 'og:title', title],
      ['property', 'og:description', project.summary],
      ['property', 'og:url', url],
      ['property', 'og:image', image],
      ['name', 'twitter:title', title],
      ['name', 'twitter:description', project.summary],
      ['name', 'twitter:image', image],
    ])
      html = html.replace(
        new RegExp('<meta ' + attribute + '="' + key + '"[^>]*>'),
        '<meta ' + attribute + '="' + key + '" content="' + escape(content) + '">',
      );
    html = html.replace(/<link rel="canonical"[^>]*>/, '<link rel="canonical" href="' + url + '">');
    html = html.replace(
      '</head>',
      schema({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.name,
        description: project.summary,
        url,
        author: person,
        about: project.sector,
        image,
      }) + '</head>',
    );
    const directory = path.join(out, 'projects', project.slug);
    await fs.mkdir(directory, { recursive: true });
    await fs.writeFile(path.join(directory, 'index.html'), html);
  }
  const home = template.replace(
    '</head>',
    schema({
      '@context': 'https://schema.org',
      '@graph': [
        person,
        {
          '@type': 'CollectionPage',
          url: origin,
          name: 'Work by Mohammad Alghazo',
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: PROJECTS.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: project.name,
              url: origin + '/projects/' + project.slug,
            })),
          },
        },
      ],
    }) + '</head>',
  );
  await fs.writeFile(path.join(out, 'index.html'), home);
  await fs.writeFile(
    path.join(out, 'sitemap.xml'),
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
      ['/', ...PROJECTS.map((p) => '/projects/' + p.slug)]
        .map((route) => '<url><loc>' + origin + route + '</loc></url>')
        .join('') +
      '</urlset>',
  );
  await fs.writeFile(
    path.join(out, 'robots.txt'),
    'User-agent: *\nAllow: /\nSitemap: ' + origin + '/sitemap.xml\n',
  );
  console.log('Generated share metadata and sitemap for ' + PROJECTS.length + ' project pages.');
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
