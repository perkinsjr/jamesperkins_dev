import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.md', '')
      },
      ...allPosts
    ];
  }, []);
}