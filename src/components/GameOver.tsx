interface GameOverProps {
  retry: () => void;
}

const GameOver = ({ retry }: GameOverProps) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button type="button" onClick={retry}>
        Retry
      </button>
    </div>
  );
};
export default GameOver;
