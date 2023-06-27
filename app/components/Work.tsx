"use client";

import Image from "next/image";
import { useState } from "react";

interface WorkProps {
  img: string;
  alt: string;
  title: string;
  summary: string;
  skills: string[];
  links: any[];
}

export default function Work({
  img,
  alt,
  title,
  summary,
  skills,
  links,
}: WorkProps) {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsMouseEntered(true);
      }}
      onMouseLeave={() => {
        setIsMouseEntered(false);
      }}
      className="relative transition flex flex-col rounded-3xl my-8 items-center sm:items-start sm:w-full sm:flex-row sm:pr-16 sm:gap-12 sm:mr-16 sm:my-12 hover:dark:bg-slate-600 hover:bg-slate-300 hover:dark:bg-opacity-50 hover:scale-95"
    >
      <img
        src={img}
        alt={alt}
        className={
          "rounded-3xl w-48 sm:w-52 md:w-60 aspect-square transition " +
          (isMouseEntered ? "scale-75" : "scale-100")
        }
      />
      <div className="gap-4 my-4 px-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-center sm:text-start line-clamp-1 overflow-x-hidden font-semibold">{title}</h2>
        <p className="font-body text-md lg:text-lg text-center sm:text-start mt-2 line-clamp-3 overflow-ellipsis">
          {summary}
        </p>
        <p>{skills}</p>
        <div className="flex justify-center sm:justify-start gap-4 sm:w-full mt-4 sm:absolute sm:bottom-0 sm:mb-6">
          {links.map(function (link, i) {
            const key: string = Object.keys(link)[0];
            return <WorkLink key={i} link={[key, link[key]]} />;
          })}
        </div>
      </div>
    </div>
  );
}

interface WorkLinkProps {
  link: [string, string];
}

function WorkLink({ link }: WorkLinkProps) {
  return (
    <a
      href={link[1]}
      rel="noopener noreferrer"
      target="_blank"
      className="px-6 py-3 rounded-full ring-2 ring-slate-500 dark:ring-slate-500 font-semibold hover:bg-slate-700 hover:text-slate-200 hover:dark:bg-slate-600 transition hover:-translate-y-1 hover:scale-105"
    >
      {link[0]}
    </a>
  );
}
