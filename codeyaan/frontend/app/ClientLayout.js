"use client";

import { usePathname } from "next/navigation";
import Navbar from "../app/_components/Navbar";
import Footer from "../app/_components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // jahan Navbar/Footer nahi chahiye
  const hideLayoutFor = ["/admin", "/staff", "/student"];

  const shouldHideLayout = hideLayoutFor.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
}
