"use client";

export function verifyImages() {
  if (typeof window === "undefined") return;

  console.log("Checking all images on the page...");

  const images = document.querySelectorAll("img");

  images.forEach((img, index) => {
    const testImage = new Image();
    testImage.onerror = () => {
      console.error(`❌ Image failed to load: ${img.src}`);
      console.log(`Element:`, img);
    };
    testImage.onload = () => {
      console.log(`✅ Image loaded successfully: ${img.src}`);
    };
    testImage.src = img.src;
  });
}

// You can call this from any component:
// import { verifyImages } from '../utils/verifyImages';
// useEffect(() => { verifyImages(); }, []);
