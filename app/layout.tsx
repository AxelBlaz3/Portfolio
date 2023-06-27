import NavBar from "./components/navigation/NavBar";
import "./globals.css";

export const metadata = {
  title: "Karthik | Software Engineer",
  description: "Karthik's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:text-slate-100 text-slate-800 dark:bg-slate-800 bg-slate-200">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
