import CPosts from "@/component/CPosts";
import FeaturedPosts from "@/component/FeaturedPosts";
import Hero from "@/component/Hero";
import SlidePosts from "@/component/SlidePosts";

export default function Home() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}
      <CPosts />
      {/* @ts-expect-error Server Component */}
      <SlidePosts />
    </>
  );
}
