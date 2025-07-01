"use client";

import Image from "next/image";
import { useState } from "react";

const StaticImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  ...props
}) => {
  const [error, setError] = useState(false);

  // Ensure src always starts with a forward slash if it's a local image
  // and doesn't start with http or data:
  const imageSrc =
    src &&
    !src.startsWith("http") &&
    !src.startsWith("data:") &&
    !src.startsWith("/")
      ? `/${src}`
      : src;

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt || "Image"}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default StaticImage;
