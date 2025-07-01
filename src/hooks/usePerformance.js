"use client";

import { useEffect, useCallback } from "react";

export const usePerformance = () => {
  const measurePerformance = useCallback((name, fn) => {
    return async (...args) => {
      const start = performance.now();
      const result = await fn(...args);
      const end = performance.now();

      if (process.env.NODE_ENV === "development") {
        console.log(`${name} took ${end - start} milliseconds`);
      }

      return result;
    };
  }, []);

  const preloadRoute = useCallback((href) => {
    if (typeof window !== "undefined") {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  const preloadImage = useCallback((src) => {
    if (typeof window !== "undefined") {
      const img = new Image();
      img.src = src;
    }
  }, []);

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "web-vital" in window) {
      import("web-vitals").then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        }
      );
    }
  }, []);

  return { measurePerformance, preloadRoute, preloadImage };
};
