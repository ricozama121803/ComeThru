'use client'
import MetallicPaint from "@/blocks/Animations/MetallicPaint/MetallicPaint";
import Footer from "@/components/Footer";
import MainSection from "@/components/home/MainSection";
import NavBar from "@/components/NavBar";
import globe from "@/assets/globe.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Fetch image data and parameters from the server
    fetch('/api/image')
      .then(response => response.json())
      .then(data => {
        setImageData(data.imageData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start min-h-screen px-4 py-6 gap-8 sm:px-6 sm:py-10 sm:gap-12">
      {/* <NavBar /> */}
      {/* <MetallicPaint imageData={undefined} params={undefined} /> */}
      <MainSection />
      <Footer />
    </div>
  );
}
