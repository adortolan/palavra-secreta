import style from "../styles/StartScreen.module.css";
import { pickRandomWord } from "../utils/pickRandomWord";

interface StartScreenProps {
  startGame: () => void;
}

const StartScreen = ({ startGame }: StartScreenProps) => {
  return (
    <div className={style.Start}>
      <h1>Welcome to the game!</h1>
      <p>Click the button to start the game</p>
      <button type="button" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};

export default StartScreen;
