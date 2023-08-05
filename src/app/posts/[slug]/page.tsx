import {getPost} from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

async function page({params}: Props) {
  const post = await getPost(params.slug);

  console.log(post);

  return (
    <>
      <div>{post?.title}</div>
      <pre>{post?.content}</pre>
    </>
  );
}

export default page;
