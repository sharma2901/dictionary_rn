import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import Swastika from "./Swastika";
import OM from "./OM";
import Hindi from "./Hindi";
import { useMemo } from "react";

// Convert inches to pixels (assuming 160dpi as base)
const INCH_TO_PX = 160;
const SYMBOL_SIZE = INCH_TO_PX * 0.3;
const OPACITY = 0.25; // Translucency level
const GRID_GAP = SYMBOL_SIZE * 1.5; // Space between symbols

interface Symbol {
  type: "swastika" | "om" | "hindi";
  x: number;
  y: number;
  rotation: number;
  size: number;
}

const Background: React.FC = () => {
  const { width, height } = useWindowDimensions();

  const symbols = useMemo(() => {
    const items: Symbol[] = [];

    // Calculate number of rows and columns based on screen size and grid gap
    const cols = Math.floor(width / GRID_GAP);
    const rows = Math.floor(height / GRID_GAP);

    // Calculate actual gaps to distribute symbols evenly
    const xGap = width / cols;
    const yGap = height / rows;

    // Create a grid of symbols
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Add some randomness to position within the grid cell
        const randomOffset = SYMBOL_SIZE * 0.3; // 30% of symbol size
        const xOffset = (Math.random() - 0.5) * randomOffset;
        const yOffset = (Math.random() - 0.5) * randomOffset;

        items.push({
          type: ["swastika", "om", "hindi"][
            Math.floor(Math.random() * 3)
          ] as Symbol["type"],
          // Center the symbol in its grid cell with slight random offset
          x: col * xGap + (xGap - SYMBOL_SIZE) / 2 + xOffset,
          y: row * yGap + (yGap - SYMBOL_SIZE) / 2 + yOffset,
          rotation: Math.random() * 180,
          size: SYMBOL_SIZE * (0.5 + Math.random() * 0.7), // Random size >= 0.5x and < 1.2x
        });
      }
    }
    return items;
  }, [width, height]);

  const renderSymbol = (symbol: Symbol, index: number) => {
    const props = {
      size: symbol.size,
      style: {
        opacity: OPACITY,
        transform: [{ rotate: `${symbol.rotation}deg` }],
      },
    };

    switch (symbol.type) {
      case "swastika":
        return (
          <Swastika key={`swastika-${index}`} fillColor="#b97808" {...props} />
        );
      case "om":
        return <OM key={`om-${index}`} fillColor="#F95428" {...props} />;
      case "hindi":
        return <Hindi key={`hindi-${index}`} fillColor="#F95428" {...props} />;
    }
  };

  return (
    <View
      style={{
        zIndex: -10,
        backgroundColor: "transparent",
        position: "absolute",
        inset: 0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {symbols.map((symbol, index) => (
        <View
          key={index}
          className="absolute"
          style={{
            left: symbol.x,
            top: symbol.y,
          }}
        >
          {renderSymbol(symbol, index)}
        </View>
      ))}
    </View>
  );
};

export default Background;
