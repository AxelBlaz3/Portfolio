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
      <div className="flex flex-col p-6 h-full w-full sm:pb-6">
        <div className="relative mx-auto sm:pl-10 w-full flex flex-col-reverse sm:flex-row items-center">
          <div className="z-0 hidden sm:flex absolute right-16 h-[85%] sm:w-screen bg-slate-300 dark:bg-gray-700 dark:bg-opacity-50" />

          <h2 className="z-10 grow font-display font-bold mt-8 sm:mt-0 text-center sm:text-sm md:text-xl lg:text-4xl sm:text-start sm:mr-24">
            Hi, I'm Karthik, a software developer with a passion for using
            technology to make a positive impact on the world.
          </h2>
          <Avatar
            className="z-10"
            src={"/images/avatar.png"}
            alt={"Profile picture"}
          />
        </div>
        <div className="flex flex-col w-full justify-center sm:mx-8">
          <h1 className="font-bold mt-16 uppercase sm:capitalize sm:font-display text-xl sm:text-2xl md:text-3xl text-center sm:text-start">
            Projects
          </h1>
          <div className="sm:mr-16 flex flex-col">
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
          </div>
        </div>
        <p className="mx-8 text-center text-xs sm:text-sm md:text-md font-body font-bold bg-opacity-40 dark:bg-opacity-40 bg-slate-400 dark:bg-slate-700 rounded-full px-4 py-3">
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
  className?: string;
}

function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <img
      className={
        "w-52 sm:w-60 md:w-80 lg:w-96 aspect-auto border-8 border-gray-400 shadow-2xl sm:mr-32 " +
        className
      }
      src={`${src}`}
      alt={`${alt}`}
    />
  );
}
