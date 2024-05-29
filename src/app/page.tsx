import Hero from "@/components/Home/Hero";
import ScrollingCard from "@/components/Home/ScrollingCard";
import TextAnimation from "@/components/ui/TextAnimation";
import DotSpace from "@/components/ui/dotSpace";
export default function Home() {
  return (
    <>
      <Hero />
      <DotSpace style={{ height: "25%" }} />
      <TextAnimation paragraph="Partnering with tech innovators to craft software products adored by millions worldwide. Transforming code into magic with a splash of creativity and a lot of coffee!" />
      {/* <DotSpace style={{ height: "25%" }} />
      <ScrollingCard />
      <DotSpace style={{ height: "25%" }} /> */}
    </>
  );
}
