import React from "react";
import {getAllPosts} from "@/service/posts";
import SwiperComponent from "./SwiperComponent";

export default async function SlidePosts() {
  const posts = await getAllPosts();

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold my-2">All posts</h2>
      <SwiperComponent posts={posts} />
    </section>
  );
}
