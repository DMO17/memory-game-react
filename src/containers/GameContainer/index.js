import { useEffect, useState } from "react";

import { CardGrid } from "../../components/CardGrid";

import { Score } from "../../components/Score";

export const GameContainer = () => {
  const [numberOfFailedMatches, setNumberOfFailedMatches] = useState(0);
  return (
    <>
      <Score numberOfFailedMatches={numberOfFailedMatches} />
      <CardGrid />
    </>
  );
};
