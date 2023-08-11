import React from "react";
import Link from "next/link";
import {Post} from "@/service/posts";
import {FcPrevious, FcNext} from "react-icons/fc";
import Image from "next/image";

type Props = {
  post: Post;
  type: "prev" | "next";
};

function AdjacentPostCard({post, type}: Props) {
  const {path, title} = post;

  return (
    <Link href={`posts/${path}`} className="w-1/3 flex flex-col items-center relative">
      <Image className="w-full" src={`/images/posts/${path}.png`} alt={title} width={380} height={220} />

      <p>{title}</p>

      {type === "prev" ? (
        <FcPrevious className="absolute top-1/4 translate-y-1/2 left-0 text-5xl stroke-white" />
      ) : (
        <FcNext className="absolute top-1/4 translate-y-1/2 right-0 text-5xl stroke-white" />
      )}
    </Link>
  );
}

export default AdjacentPostCard;
