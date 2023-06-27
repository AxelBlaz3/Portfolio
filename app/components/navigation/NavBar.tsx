"use client";

import { IoMdMenu, IoMdClose } from "react-icons/io";

import Link from "next/link";
import NavActionButton from "./NavActionButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavBar({}) {
  const navActions = ["About", "Github", "LinkedIn"];
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsNavMenuOpen(isNavMenuOpen && window.innerWidth < 640);
    });
  });

  function openInNewTab(url: string) {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }

  function onNavActionClick(action: string) {
    setIsNavMenuOpen(false);
    switch (action) {
      case "Github": {
        openInNewTab("https://github.com/AxelBlaz3");
        return;
      }
      case "LinkedIn": {
        openInNewTab("https://linkedin.com/in/karthikgaddam4");
        return;
      }
      case "About": {
        router.replace("/about");
        return;
      }
      case "Contact": {
        router.replace("/contact");
        return;
      }
    }
  }

  return (
    <>
      <div className="flex justify-between px-8 sm:px-16 py-6">
        <Link href="/" replace={true} className="font-bold text-2xl sm:mt-3">
          KARTHIK REDDY
        </Link>
        <div className="hidden sm:flex gap-4">
          {navActions.map((action) => (
            <NavActionButton
              key={action}
              label={action}
              onNavActionClick={() => onNavActionClick(action)}
            />
          ))}
        </div>
        <div
          className="sm:hidden flex flex-col"
          onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
        >
          {isNavMenuOpen ? (
            <IoMdClose size={32} className="absolute end-8" />
          ) : (
            <IoMdMenu size={32} />
          )}
        </div>
      </div>

      <div
        className={`${
          isNavMenuOpen ? "h-48 px-6 py-4" : "h-0"
        } transition-all overflow-hidden flex flex-col gap-1 bg-slate-700 w-full`}
      >
        {navActions.map((action) => (
          <NavActionButton
            key={action}
            label={action}
            onNavActionClick={() => {
              onNavActionClick(action);
            }}
          />
        ))}
      </div>
    </>
  );
}
