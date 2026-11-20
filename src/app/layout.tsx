"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/globals.css";
import { poppins, roboto_mono } from "@/constants/font";
import { Contact, Navbar, Footer } from "@/components";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({});
  }, []);

  const superadmin = ["/auth/superadmin", "/dashboard/superadmin"];

  const isV2 = pathname === "/v2" || pathname.startsWith("/v2/");
  const hideLegacyChrome = isV2 || superadmin.includes(pathname);

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_mono.variable} ${isV2 ? "" : "scroll-smooth"} `}
    >
      <head />
      <body>
        {hideLegacyChrome ? null : <Navbar />}
        {hideLegacyChrome ? null : <Contact />}
        <main className={`${hideLegacyChrome ? "" : "container"}`}>
          {children}
        </main>
        {hideLegacyChrome ? null : <Footer />}
      </body>
    </html>
  );
}
