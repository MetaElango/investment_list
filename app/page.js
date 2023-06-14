import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "@/components/Hero";
import CompanyList from "@/components/CompanyList";
import ScrollButton from "@/components/scrollButton/ScrollButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero firstLine="Best" secondLine="Investment" thirdLine="List 2023" />
      <CompanyList />
      <ScrollButton />
    </>
  );
}
