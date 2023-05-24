"use client";

import Navbar from "@/components/Navbar";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={{ backgroundColor: "#070533" }}>
        <CacheProvider>
          <ChakraProvider>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
