import FilterablePosts from "@/component/FilterablePosts";
import {getAllPosts} from "@/service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const category = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} category={category} />;
}
