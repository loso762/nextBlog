"use client";
import PostCard from "./PostCard";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import {Swiper, SwiperSlide} from "swiper/react";
import {Post} from "@/service/posts";
import {Autoplay, Navigation, Virtual} from "swiper/modules";

type Props = {posts: Post[]};

function SwiperComponent({posts}: Props) {
  return (
    <section className="mx-10">
      <Swiper
        modules={[Autoplay, Navigation, Virtual]}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        navigation
        autoplay
        virtual>
        {posts.map((post, idx) => (
          <SwiperSlide key={post.path} virtualIndex={idx}>
            <PostCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SwiperComponent;
