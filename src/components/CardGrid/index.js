import "../../App.css";
import { v4 as uuidv4 } from "uuid";

import { Card } from "./Card";

export const CardGrid = ({ cards, dimension, onClick }) => {
  const cardsToRender = cards.reduce(
    (rows, key, index) =>
      (index % dimension === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  );

  return (
    <div>
      {cardsToRender.map((row, index) => {
        return (
          <div
            className="d-flex justify-content-center flex-direction-row"
            key={uuidv4()}
          >
            {row.map((card) => {
              return <Card {...card} key={uuidv4()} onClick={onClick} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
