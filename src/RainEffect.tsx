import React, { useMemo } from "react";
import { Rain } from "./Rain";
import { random, AbsoluteFill } from "remotion";

export const RainEffect: React.FC = () => {
  const drops = useMemo(() => {
    return new Array(500).fill(true).map((_, i) => {
      const x = random("x"+ i) * 100 + "%";
      const delay = random("delay" + i) * 500;
      const size = random("size" + i) + 0.4; 
      return { x, delay, size };
  });
},
 [] 
 );
 return (
  <AbsoluteFill>
    {drops.map((d) => {
      return <Rain x={d.x} delay={d.delay} size={d.size} />;
    })}
  </AbsoluteFill>
    );
};