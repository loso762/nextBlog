import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.jpg";

export default function Hero() {
  return (
    <section className="text-center mx-auto">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="Picture of the author"
        width={200}
        height={200}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Kihun"}</h2>
      <h3 className="text-xl font-semibold">Front Engineer</h3>
      <p>코딩에 미친자, 김기훈</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2 mx-auto">Contact Me</button>
      </Link>
    </section>
  );
}
