import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
// import { read } from 'to-vfile';
import { unified } from 'unified';
import { Post, PostData, FullPost } from '../models/Post';
import { sortByValidDate } from './utils';

export function getSortedPostsData(directory: string): PostData[] {
  const postsDirectory = path.resolve('./src', `./pages/${directory}`);
  const fileNames = fs.readdirSync(postsDirectory).filter(fileName => fileName.split('.')[1] === 'mdx');
  const allPostsData = fileNames.map((fileName: string): PostData | null => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const postData = matterResult.data as PostData;

    if (matterResult?.data?.date) {
      return {
        id,
        ...postData
      };
    }
    return null;
  });

  return sortByValidDate(allPostsData);
}

export function getAllPostIds(directory: string): Post[] {
  const postsDirectory = path.resolve('./src', `./pages/${directory}`);
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => ({
    id: fileName.replace(/\.md$/, '')
  }));
}

export async function getPostData(id: string, directory: string): Promise<FullPost> {
  const postsDirectory = path.resolve('./src', `./pages/${directory}`);
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const postData = matterResult.data as PostData;

  const processedContent = await unified().use(remarkParse).use(remarkHtml).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...postData
  };
}
