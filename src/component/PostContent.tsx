import React from "react";
import MarkdownViewer from "./MarkDownViewer";
import {AiTwotoneCalendar} from "react-icons/ai";
import {PostData} from "@/service/posts";

type Props = {
  post: PostData;
};

function PostContent({post}: Props) {
  const {title, date, description, content} = post;

  return (
    <section className="flex flex-col p-4 w-full">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
      <MarkdownViewer content={content} />
    </section>
  );
}

export default PostContent;
