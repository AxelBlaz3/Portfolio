import Image from "next/image";
import Work from "./Work";
import Link from "next/link";

export default function Content({}) {
  const works: any[] = [
    {
      title: "Carnival: Fitness Content Curator",
      summary:
        "Use Carnival to search for podcasts, tv shows, and movies from your favourite platforms to fit perfectly with how long you want to work out for.",
      img: "/images/work/carnival_logo.png",
      alt: "Carnival Logo",
      skills: [],
      links: [
        {
          "Google Play":
            "https://play.google.com/store/apps/details?id=app.carnival",
        },
        {
          Github: "https://github.com/AxelBlaz3/Carnival-App",
        },
      ],
    },
    {
      title: "Hing: Share Food Recipes",
      summary:
        "Sharing your favorite recipes made easier.HING ~ a platform to share your recipes, where people like you come to discover and share many home-cooked recipes every day. ",
      img: "/images/work/hing_logo.png",
      alt: "Hing Logo",
      skills: [],
      links: [
        {
          "Google Play":
            "https://play.google.com/store/apps/details?id=com.hing",
        },
        {
          Github: "https://github.com/AxelBlaz3/Hing",
        },
      ],
    },
    {
      title: "Loudcar",
      summary:
        "A simple app to communicate with LED hardware using Bluetooth Low Energy (BLE). With Loudcar, a user can update the text, and animate lights. Hassle free support with Google Assistant actions!",
      img: "/images/work/loudcar_logo.png",
      alt: "Loudcar Logo",
      skills: [],
      links: [
        {
          "Google Play":
            "https://play.google.com/store/apps/details?id=com.loudcar",
        },
      ],
    },
    {
      title: "Nano Kernel Updater",
      summary:
        "A simple app to install/update Nano kernel to supported devices. The app provides seemless updates to the users and hassle-free kernel flashes using AnyKernel script.",
      img: "/images/work/nano_logo.jpg",
      alt: "Nano Logo",
      skills: [],
      links: [
        {
          Github: "https://github.com/nano-kernel-project/Nano-Updater",
        },
      ],
    },
  ];

  return (
    <>
      <div className="invisible sm:visible mr-16 ml-0 sm:mt-24 mb-8 bg-slate-300 dark:bg-gray-700 dark:bg-opacity-50 sm:h-96" />
      <div className="z-10 p-6 sm:absolute sm:top-16 sm:p-16 sm:mr-0 sm:gap-32">
        <div className="flex flex-col-reverse sm:flex-row items-center">
          <h2 className="font-display font-bold mt-8 sm:mt-0 text-center text-xl sm:text-2xl md:text-3xl sm:text-start sm:pr-24">
            Hi, I'm Karthik, a software developer with a passion for using
            technology to make a positive impact on the world.
          </h2>
          <Avatar src={"/images/avatar.jpg"} alt={"Profile picture"} />
        </div>
        <h1 className="font-bold mt-16 uppercase sm:capitalize sm:font-display text-xl sm:text-2xl md:text-3xl text-center sm:text-start sm:mt-16">
          Projects
        </h1>
        {works.map((work, i) => (
          <Work
            key={i}
            summary={work.summary}
            img={work.img}
            alt={work.alt}
            title={work.title}
            skills={work.skills}
            links={work.links}
          />
        ))}
        <p className="text-center text-xs sm:text-sm md:text-md font-body font-bold bg-opacity-50 bg-slate-400 dark:bg-slate-700 rounded-full px-4 py-3">
          Build with ❤️ using{" "}
          <Link className="underline" href={"https://nextjs.org"}>
            Next.js
          </Link>{" "}
          and designed using{" "}
          <Link className="underline" href={"https://tailwindcss.com"}>
            Tailwind
          </Link>
        </p>
      </div>
    </>
  );
}

interface AvatarProps {
  src: string;
  alt: string;
}

function Avatar({ src, alt }: AvatarProps) {
  return (
    <img
      className="border-8 border-gray-400 w-96 sm:max-w-sm sm:mr-16 shadow-2xl"
      src={`${src}`}
      alt={`${alt}`}
    />
  );
}
