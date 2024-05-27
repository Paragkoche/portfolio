import type { Metadata } from "next";
import "@/scss/globals.scss";
import { CursorProvider } from "@/Providers/CursorProvider";
import Header from "@/components/global/header";
import HomeLayout from "@/components/Home/homeBody";
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
        <CursorProvider>
          <Header />
          <HomeLayout>{children}</HomeLayout>
        </CursorProvider>
      </body>
    </html>
  );
}
