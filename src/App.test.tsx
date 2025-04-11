import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render StartScreen component when gameStarted is StartScreen", () => {
    render(<App />);
    expect(screen.getByText("Start Game")).toBeInTheDocument();
  });

  it("should render Game component when gameStarted is Game", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Start Game"));
    expect(screen.getByText("Adivinha a palavra:")).toBeInTheDocument();
  });

  // it("should start the game when Start Game button is clicked", () => {
  //   render(<App />);
  //   fireEvent.click(screen.getByText("Start Game"));
  //   expect(screen.getByText("Adivinha a palavra:")).toBeInTheDocument();
  // });
  it("should call verifyLetter function when a letter is submitted", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Start Game"));
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "A" } });
    fireEvent.submit(input);
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("should show the correct word when guessed", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Start Game"));
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "A" } });
    fireEvent.submit(input);
    expect(screen.getByText("A")).toBeInTheDocument();
  });
});
