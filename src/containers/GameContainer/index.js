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
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [turn, setTurn] = useState(0);

  const startTheGame = (event) => setStartGame(true);

  useEffect(() => {
    if (turn === 2) {
      if (firstCard.word === secondCard.word) {
        const newCards = cards.map((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            card.matched = true;
          }

          return card;
        });

        setCards(newCards);
        setTurn(0);
        setFirstCard();
        setSecondCard();
      } else {
        const newCards = cards.map((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            card.isVisible = false;
          }

          return card;
        });

        setCards(newCards);
        setTurn(0);
        setFirstCard();
        setSecondCard();
        setNumberOfFailedMatches(numberOfFailedMatches + 1);
      }
    }
  }, [cards, turn, firstCard, secondCard]);

  const onClick = (event) => {
    const { id } = event.currentTarget;

    const cardProperties = cards.find((card) => {
      return card.id === id;
    });

    if (turn === 0) {
      setFirstCard(cardProperties);
    }

    if (turn === 1) {
      setSecondCard(cardProperties);
    }

    if (!cardProperties.isVisible) {
      setTurn(turn + 1);
    }

    const newCards = cards.map((card) => {
      if (card.id === id) {
        card.isVisible = true;
      }
      return card;
    });

    setCards(newCards);
  };

  console.log(turn);

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
