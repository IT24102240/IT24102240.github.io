"use client";

import { useEffect } from "react";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor tab switching performance
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (
          entry.entryType === "measure" &&
          entry.name.includes("tab-switch")
        ) {
          console.log(`Tab switch took: ${entry.duration}ms`);

          // Alert if tab switching is too slow
          if (entry.duration > 300) {
            console.warn("Slow tab switching detected:", entry.duration);
          }
        }
      });
    });

    observer.observe({ entryTypes: ["measure"] });

    return () => observer.disconnect();
  }, []);

  // Monitor memory usage in development
  useEffect(() => {
    if (process.env.NODE_ENV === "development" && "memory" in performance) {
      const checkMemory = () => {
        const memInfo = performance.memory;
        console.log("Memory usage:", {
          used: Math.round(memInfo.usedJSHeapSize / 1048576) + " MB",
          total: Math.round(memInfo.totalJSHeapSize / 1048576) + " MB",
          limit: Math.round(memInfo.jsHeapSizeLimit / 1048576) + " MB",
        });
      };

      const interval = setInterval(checkMemory, 10000); // Check every 10 seconds
      return () => clearInterval(interval);
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
