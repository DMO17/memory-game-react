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

  return (
    <div>
      <Score numberOfFailedMatches={numberOfFailedMatches} />
      <CardGrid cards={cards} dimension={4} />
    </div>
  );
};
