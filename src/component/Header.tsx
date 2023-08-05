import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="m-4 flex  justify-between">
      <h1 className="font-bold text-3xl">
        <Link href={"/"}>Kihun's Blog</Link>
      </h1>
      <nav className="flex space-x-10 items-center">
        <Link href={"/about"}>about</Link>
        <Link href={"/posts"}>posts</Link>
        <Link href={"/contact"}>contact</Link>
      </nav>
    </header>
  );
}

export default Header;
