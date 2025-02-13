'use client'
import Block from "./components/Block";
import Rules from "./components/Rules";
import { useEffect, useState } from "react";

export default function Home() {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white', 'teal', 'brown'];
  const [requiredColors, setRequiredColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [flag, setFlag] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [highlightedColor, setHighlightedColor] = useState(null);
  const [showRules, setShowRules] = useState(true);
  const [delayMs, setDelayMs] = useState(500);

  function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  const flashRequiredColors = async () => {
    for (const element of requiredColors) {
      console.log(element);
      setHighlightedColor(element);
      await delay(delayMs);
      setHighlightedColor(element);
      await delay(50);
    }

    setDelayMs(delayMs - 50);
    setHighlightedColor(null);
  }

  useEffect(() => {
    flashRequiredColors();
  }, [requiredColors]);

  const handleBlockClick = (color) => {
    setSelectedColors((prev) => [...prev, color]);

    const currentIndex = selectedColors.length;
    if (requiredColors[currentIndex] !== color) {
      endGame();
    } else if (selectedColors.length + 1 === requiredColors.length) {
      addColor();
    }
  };

  const handleStartGame = () => {
    setFlag(true);
    setGameOver(false);
    setRequiredColors([]);
    setSelectedColors([]);
    addColor();
  };

  const addColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setRequiredColors((prev) => [...prev, newColor]);

    setSelectedColors([]);
  };

  const endGame = () => {
    setFlag(false);
    setGameOver(true);
  };

  const handleShowRules = () => {
    setShowRules(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      {showRules && <Rules onClick={() => handleShowRules()}/>}
      <div>
        <button onClick={handleStartGame} disabled={flag}>
          {flag === false
            ? "Start Game"
            : "Game in progress"}
        </button>
      </div>
      {gameOver && <h3>Game Over! Try Again.</h3>}
      <div className="grid grid-cols-3 gap-2 justify-center items-center w-fit">
        {colors.map((color, index) => (
          <Block
            key={index}
            color={color}
            highlighted={color === highlightedColor}
            onClick={() => flag && handleBlockClick(color)}
          />
        ))}
      </div>
    </div>
  );
}
