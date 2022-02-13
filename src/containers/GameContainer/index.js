import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CardGrid } from "../../components/CardGrid";
import { Score } from "../../components/Score";

const initialCards = [
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Dog",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Rat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Dog",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Eel",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Pig",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Cow",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Pig",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Cow",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Cat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Bat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Rat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Cat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Eel",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Ant",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Bat",
  },
  {
    id: uuidv4(),
    isVisible: false,
    matched: false,
    word: "Ant",
  },
];

export const GameContainer = () => {
  const [cards, setCards] = useState(initialCards);
  const [numberOfFailedMatches, setNumberOfFailedMatches] = useState(0);
  const [startGame, setStartGame] = useState(false);

  const startTheGame = (event) => setStartGame(true);

  const onClick = (event) => {
    const { id } = event.currentTarget;

    const newCards = cards.map((card) => {
      if (card.id === id) {
        card.isVisible = true;
      }
      return card;
    });

    return setCards(newCards);
  };

  return (
    <div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-success btn-lg"
          onClick={startTheGame}
        >
          Start Game
        </button>
      </div>
      {startGame && (
        <>
          <Score numberOfFailedMatches={numberOfFailedMatches} />

          <CardGrid cards={cards} dimension={4} onClick={onClick} />
        </>
      )}
    </div>
  );
};
