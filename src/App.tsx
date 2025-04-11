import "./App.css";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import { useCallback, useState } from "react";
import style from "./styles/App.module.css";
import { pickRandomWord } from "./utils/pickRandomWord";

const gameStage = [
  { id: 1, name: "StartScreen" },
  { id: 2, name: "Game" },
  { id: 3, name: "GameOver" },
];

function App() {
  const [gameStarted, setGameStarted] = useState(gameStage[0].name);
  const [pickedWord, setPickedWord] = useState<string[]>([]);
  const [pickedCategory, setPickedCategory] = useState<string>("");
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(0);
  const [score, setScore] = useState(0);

  const tentativas = 3;

  const startGame = useCallback(() => {
    const { category, word } = pickRandomWord();
    const wordLetters = word.split("").map((letter) => letter.toLowerCase());
    setPickedWord(wordLetters);
    setPickedCategory(category);
    setGuesses(tentativas);
    setWrongLetters([]);
    setGuessedLetters(new Array(wordLetters.length).fill(""));
    setGameStarted(gameStage[1].name);
  }, []);

  const endGame = () => {
    setGameStarted(gameStage[2].name);
  };

  const retry = () => {
    setGameStarted(gameStage[0].name);
  };

  const gameProps = {
    score,
    pickedCategory,
    pickedWord,
    guessedLetters,
    guesses,
    endGame: endGame,
    wrongLetters,
    verifyLetter: (letter: string) => {
      if (pickedWord.includes(letter)) {
        for (let i = 0; i < pickedWord.length; i++) {
          if (pickedWord[i] === letter) {
            gameProps.guessedLetters[i] = letter;
          }
        }
      } else {
        setWrongLetters((prev) => [...prev, letter]);
        setGuesses((prev) => prev - 1);
        if (guesses <= 0) {
          endGame();
        }
      }

      if (
        pickedWord.length ===
        gameProps.guessedLetters.filter((t) => t.trim()).length
      ) {
        alert("Parabéns você acertou a palavra.");
        setScore((prev) => prev + 100);
        startGame();
      }
    },
  };

  return (
    <div className={style.App}>
      {gameStarted === "StartScreen" && <StartScreen startGame={startGame} />}
      {gameStarted === "Game" && <Game {...gameProps} />}
      {gameStarted === "GameOver" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
