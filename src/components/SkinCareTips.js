// components/SkinCareTips.js
import { useState, useEffect } from "react";

export default function SkinCareTips() {
  const tips = [
    "Drink plenty of water to keep your skin hydrated.",
    "Always remove makeup before going to bed.",
    "Use sunscreen daily, even when indoors.",
    "Exfoliate your skin once or twice a week.",
    "Moisturize immediately after cleansing.",
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) =>
        prevIndex === tips.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change tip every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, [tips.length]);

  return (
    <div className="p-4 bg-pink-50 shadow rounded mt-4">
      <h3 className="text-lg font-semibold text-pink-700 mb-2">Skin Care Tip</h3>
      <p>{tips[currentTipIndex]}</p>
    </div>
  );
}
