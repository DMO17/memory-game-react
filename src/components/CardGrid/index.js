import "../../App.css";

import { Card } from "./Card";

export const CardGrid = () => {
  return (
    <div>
      <div className="d-flex justify-content-center flex-direction-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="d-flex justify-content-center flex-direction-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="d-flex justify-content-center flex-direction-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="d-flex justify-content-center flex-direction-row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
