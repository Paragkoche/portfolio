import type { Metadata } from "next";
import "@/scss/globals.scss";
import "@/scss/main.scss";
import SideBar from "@/components/ui/SideBar";
import Headers from "@/components/ui/headers";
export const metadata: Metadata = {
  title: "Parag Koche | Full Stack Web Developer",
  description:
    "Parag Koche's professional portfolio showcasing expertise in full stack web development, including projects, skills, and professional experience.",
  keywords:
    "Parag Koche, Full Stack Developer, Web Developer, JavaScript, TypeScript, Python, React, Node.js, GitHub, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Headers />

        <SideBar />
        <main className="main-body">{children}</main>
      </body>
    </html>
  );
}
