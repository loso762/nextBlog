import {getFeaturedPosts} from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
