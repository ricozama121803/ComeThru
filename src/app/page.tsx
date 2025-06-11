'use client'
import Footer from "@/components/Footer";
import MainSection from "@/components/home/MainSection";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start min-h-screen px-4 py-6 gap-8 sm:px-6 sm:py-10 sm:gap-12">
      {/* <NavBar /> */}
      <MainSection />
      <Footer />
    </div>
  );
}
