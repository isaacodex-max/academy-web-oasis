import React, { useEffect, useState } from "react";

interface TypewriterWordProps {
  text: string;
  delay?: number; // ms between words
  className?: string;
}

const TypewriterWord: React.FC<TypewriterWordProps> = ({ text, delay = 400, className }) => {
  const words = text.split(" ");
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < words.length) {
      const timeout = setTimeout(() => setVisibleCount(visibleCount + 1), delay);
      return () => clearTimeout(timeout);
    }
  }, [visibleCount, words.length, delay]);

  return (
    <span className={className}>
      {words.slice(0, visibleCount).join(" ")}
      <span className="opacity-50">{visibleCount < words.length ? " ..." : ""}</span>
    </span>
  );
};

export default TypewriterWord;