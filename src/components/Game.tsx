import React, { useState } from "react";
import style from "../styles/Game.module.css";

interface GameProps {
  endGame: () => void;
  score: number;
  pickedCategory: string;
  pickedWord: string[];
  guessedLetters: string[];
  guesses: number;
  wrongLetters: string[];
  verifyLetter: (letter: string) => void;
}

const Game = ({
  endGame,
  score,
  pickedCategory,
  pickedWord,
  guessedLetters,
  guesses,
  wrongLetters,
  verifyLetter,
}: GameProps) => {
  const [letter, setLetter] = useState("");

  const submittedLetter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    verifyLetter(letter);
    letterInputRef.current?.focus();
    // forcar o refresh do componente
    setLetter("");
  };

  const letterInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={style.game}>
      <p className={style.points}>
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinha a palavra:</h1>
      <h3 className={style.tip}>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas(s).</p>
      <div className={style.wordContainer}>
        {guessedLetters.map((letter, i) =>
          letter.includes(letter) ? (
            <span key={i}>{letter}</span>
          ) : (
            <span key={i} />
          )
        )}
      </div>
      <div className={style.letterContainer}>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={submittedLetter}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button type="submit">Jogar!</button>
        </form>
      </div>
      <div className={style.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i} className="letter">
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
