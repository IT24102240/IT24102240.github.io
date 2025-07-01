"use client";

import { memo, useMemo, useState, useEffect } from "react";

const VirtualizedList = memo(
  ({
    items,
    itemHeight = 100,
    containerHeight = 400,
    renderItem,
    overscan = 5,
  }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const [containerRef, setContainerRef] = useState(null);

    const visibleItems = useMemo(() => {
      const startIndex = Math.max(
        0,
        Math.floor(scrollTop / itemHeight) - overscan
      );
      const endIndex = Math.min(
        items.length,
        Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
      );

      return {
        startIndex,
        endIndex,
        items: items.slice(startIndex, endIndex),
        offsetY: startIndex * itemHeight,
      };
    }, [items, itemHeight, containerHeight, scrollTop, overscan]);

    const handleScroll = (e) => {
      setScrollTop(e.target.scrollTop);
    };

    return (
      <div
        ref={setContainerRef}
        className="overflow-auto"
        style={{ height: containerHeight }}
        onScroll={handleScroll}
      >
        <div
          style={{ height: items.length * itemHeight, position: "relative" }}
        >
          <div
            style={{
              transform: `translateY(${visibleItems.offsetY}px)`,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            {visibleItems.items.map((item, index) => (
              <div
                key={visibleItems.startIndex + index}
                style={{ height: itemHeight }}
              >
                {renderItem(item, visibleItems.startIndex + index)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

VirtualizedList.displayName = "VirtualizedList";

export default VirtualizedList;
