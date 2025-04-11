import React from "react";
import { render, screen } from "@testing-library/react";
import StartScreen from "./StartScreen";

describe("StartScreen", () => {
  it("renders with a mensagem de boas-vindas", () => {
    render(<StartScreen startGame={() => {}} />);
    const msgBoasVindas = screen.getByText("Welcome to the game!");
    expect(msgBoasVindas).toBeInTheDocument();
  });

  it("render button start game", () => {
    render(<StartScreen startGame={() => {}} />);
    const button = screen.getByText("Start Game");

    expect(button).toBeInTheDocument();
  });

  it("calls startGame when button is clicked", () => {
    const startGame = jest.fn();
    render(<StartScreen startGame={startGame} />);
    const button = screen.getByText("Start Game");
    button.click();
    expect(startGame).toHaveBeenCalled();
  });

  it("renders the button with the correct type", () => {
    render(<StartScreen startGame={() => {}} />);
    const button = screen.getByText("Start Game");
    expect(button).toHaveAttribute("type", "button");
  });
});
