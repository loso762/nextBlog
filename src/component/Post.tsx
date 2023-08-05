import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  des: string;
  key: number;
};

function PostCard({title, des, key}: Props) {
  return (
    <Link href={`/posts/${title}`}>
      <li key={key} className="">
        <h3>{title}</h3>
        <p>{des}</p>
        <Image src={`/images/posts/${title}.png`} alt="img" width={100} height={100} />
      </li>
    </Link>
  );
}

export default PostCard;
