import "../../../App.css";

export const Card = ({ word, id, isVisible, matched, onClick }) => {
  if (isVisible) {
    return (
      <div
        className="d-flex border image-card justify-content-center
      align-items-center"
        id={id}
        onClick={onClick}
      >
        {word}
      </div>
    );
  }
  return (
    <div
      className="d-flex border image-card image-card-masked justify-content-center align-items-center"
      onClick={onClick}
      id={id}
    >
      <i className="fa-solid fa-triangle-exclamation"></i>
    </div>
  );
};
