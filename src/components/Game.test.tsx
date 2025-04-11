import { render, screen } from "@testing-library/react";
import Game from "./Game";

const gameProps = {
  score: 0,
  pickedCategory: "",
  pickedWord: [],
  guessedLetters: [],
  guesses: 0,
  endGame: () => {},
  wrongLetters: [],
  verifyLetter: (letter: string) => {
    console.log(letter);
  },
};

describe("Game", () => {
  it("renders with a mensagem de game", () => {
    render(<Game {...gameProps} />);
    const msgGame = screen.getByText("Adivinha a palavra:");
    expect(msgGame).toBeInTheDocument();
  });

  it("Deve apresentar a dica sobre a palavra: Carro", () => {
    const gameProps = {
      score: 0,
      pickedCategory: "Carro",
      pickedWord: [],
      guessedLetters: [],
      guesses: 0,
      endGame: () => {},
      wrongLetters: [],
      verifyLetter: (letter: string) => {
        console.log(letter);
      },
    };

    render(<Game {...gameProps} />);
    const msgCategory = screen.getByText("Carro");
    expect(msgCategory).toBeInTheDocument();
  });

  //criar testes para verificar se a palavra está correta
  it("Deve apresentar a quantidade de tentativas restantes", () => {
    const gameProps = {
      score: 0,
      pickedCategory: "Carro",
      pickedWord: ["C", "A", "R", "R", "O"],
      guessedLetters: ["C", "A", "R", "R", "O"],
      guesses: 3,
      endGame: () => {},
      wrongLetters: [],
      verifyLetter: (letter: string) => {
        console.log(letter);
      },
    };

    render(<Game {...gameProps} />);
    const msgCategory = screen.getByText("Você ainda tem 3 tentativas(s).");
    expect(msgCategory).toBeInTheDocument();
  });

  //quando clicar no botao JOGAR deve chamar a funcao de verificar letra
  it("Deve chamar a função verifyLetter ao clicar no botão JOGAR", () => {
    const verifyLetterMock = jest.fn();
    const gameProps = {
      score: 0,
      pickedCategory: "Carro",
      pickedWord: ["C", "A", "R", "R", "O"],
      guessedLetters: [],
      guesses: 3,
      endGame: () => {},
      wrongLetters: [],
      verifyLetter: verifyLetterMock,
    };

    render(<Game {...gameProps} />);
    const button = screen.getByText("Jogar!");
    button.click();

    expect(verifyLetterMock).toHaveBeenCalled();
  });
});
