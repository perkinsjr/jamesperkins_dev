const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
  const feed = new RSS({
    title: 'James Perkins',
    site_url: 'https://jamesperkins.dev',
    feed_url: 'https://jamesperkins.dev/feed.xml'
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'posts'));

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(
        path.join(__dirname, '..', 'posts', name)
      );
      const frontmatter = matter(content);
      console.log(frontmatter.data);
      feed.item({
        title: frontmatter.data.title,
        url: 'https://jamesperkins.dev/post/' + name.replace(/\.md?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.excerpt
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();