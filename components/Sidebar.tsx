import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  

  return (
    <section className="sticky left-0 flex h-screen w-fit flex-col gap-2 bg-black p-3 text-white max-sm:hidden lg:w-[320px]">
      <div className="flex flex-col rounded-md bg-zinc-900 p-4 gap-5">
        <Image
          src="/icons/logo.svg"
          width={80}
          height={100}
          alt="Logo"
          className="invert"
        />
        <div className="flex gap-5 place-items-center font-bold">
          <Image
            src="/icons/home_filled.svg"
            width={25}
            height={100}
            alt="Logo"
            className="invert"
          />
          Home
        </div>
        <div className="flex gap-5 place-items-center">
          <Image
            src="/icons/search.svg"
            width={25}
            height={100}
            alt="Logo"
            className="invert"
          />
          Search
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-md bg-zinc-900 p-1 gap-5 h-screen">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between p-3">
            <div className="flex gap-3 place-items-center">
              <Image
                src="/icons/library.svg"
                width={25}
                height={100}
                alt="Logo"
                className="invert"
              />
              Your Library
            </div>
            <Image
              src="/icons/plus.svg"
              width={15}
              height={100}
              alt="Plus"
              className="invert"
            />
          </div>
          <div className="flex flex-col h-[350px] overflow-y-auto gap-3">
            <div className="flex flex-col gap-3 p-4 bg-zinc-800 rounded-lg">
              <span className="text-[15px] font-bold">
                Create your first playlist
              </span>
              <span className="text-sm">It's easy, we'll help you</span>

              <div className="rounded-full bg-white text-black p-2 px-3 w-fit flex  items-center justify-center text-sm font-bold">
                Create Playlist
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4 bg-zinc-800 rounded-lg">
              <span className="text-[15px] font-bold">
                Let's find some podcasts to follow
              </span>
              <span className="text-sm">
                We'll keep you updated on new episodes
              </span>

              <div className="rounded-full bg-white text-black p-2 px-3 flex w-fit items-center justify-center text-sm font-bold">
                Browse podcasts
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap p-5">
          {footerLinks.map((link, index) => (
            <Link key={index} href={link.link}>
              <span className="text-xs text-zinc-700">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
