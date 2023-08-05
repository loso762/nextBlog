import {metadata} from "./../../../my-app/src/app/page";
import {readFile} from "fs/promises";
import {type} from "os";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {content: string};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getPost(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metadata = await getAllPosts().then((posts) => posts.find((post) => post.path === fileName));
  if (!metadata) {
    throw new Error(`${fileName} 파일 없음`);
  }
  const content = await readFile(filePath, "utf-8");

  return {...metadata, content};
}

export async function getCarouselPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");

  return readFile(filePath, "utf-8")
    .then<Post[]>((file) => JSON.parse(file))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}