import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "@/components/Hero";
import CompanyList from "@/components/CompanyList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyList />
    </>
  );
}
