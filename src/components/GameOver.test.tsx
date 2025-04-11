import { render, screen } from "@testing-library/react";
import GameOver from "./GameOver";

describe("Game Over", () => {
  it("renders with a mensagem de game over", () => {
    render(<GameOver retry={() => {}} />);
    const msgGameOver = screen.getByText("Game Over");
    expect(msgGameOver).toBeInTheDocument();
  });

  it("render button retry", () => {
    render(<GameOver retry={() => {}} />);
    const button = screen.getByText("Tentar novamente");

    expect(button).toBeInTheDocument();
  });

  it("calls retry when button is clicked", () => {
    const retry = jest.fn();
    render(<GameOver retry={retry} />);
    const button = screen.getByText("Tentar novamente");
    button.click();
    expect(retry).toHaveBeenCalled();
  });
});
