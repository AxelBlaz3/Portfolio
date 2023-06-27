"use client";

interface NavActionButtonProps {
  label: string;
  onNavActionClick: () => void;
}

export default function NavActionButton({
  label,
  onNavActionClick
}: NavActionButtonProps) {
  return (
    <a
      className={`font-semibold cursor-pointer px-4 py-3 rounded-full sm:transition sm:hover:-translate-y-1 hover:bg-slate-700 hover:text-slate-200 hover:dark:bg-slate-600 ring-slate-500 dark:ring-slate-500 sm:hover:scale-110`}
      onClick={onNavActionClick}
    >
      {label}
    </a>
  );
}
