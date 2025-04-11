import { words } from "../data/words";

interface Word {
  Carro: string[];
  Fruta: string[];
  Computador: string[];
  Alimento: string[];
}

export const pickRandomWord = () => {
  const wordList: Word = {
    Carro: words.Carro,
    Fruta: words.Fruta,
    Computador: words.Computador,
    Alimento: words.Alimento,
  };

  const category =
    Object.keys(wordList)[
      Math.floor(Math.random() * Object.keys(wordList).length)
    ];

  const word =
    wordList[category as keyof Word][
      Math.floor(Math.random() * wordList[category as keyof Word].length)
    ];

  return { category, word };
};
