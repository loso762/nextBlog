"use client";

import FilterList from "@/component/FilterList";
import PostCard from "@/component/PostCard";
import {Post} from "@/service/posts";
import {useState} from "react";

type Props = {
  posts: Post[];
  category: string[];
};

const All_Posts = "All posts";

export default function FilterablePosts({posts, category}: Props) {
  const [selected, setSeleted] = useState(All_Posts);
  const filtered = selected === All_Posts ? posts : posts.filter((post) => post.category === selected);

  return (
    <>
      <ul className="flex flex-wrap justify-around w-10/12">
        {filtered.map((post) => (
          <li key={post.path} className="w-1/4 m-2">
            <PostCard post={post} />
          </li>
        ))}
      </ul>

      <FilterList changeCategory={(selected) => setSeleted(selected)} selected={selected} />
    </>
  );
}
