import "../../../App.css";

export const Card = () => {
  if (true) {
    return (
      <div
        className="d-flex border image-card justify-content-center
      align-items-center"
      >
        word
      </div>
    );
  }
  return (
    <div className="d-flex border image-card image-card-masked justify-content-center align-items-center">
      <i className="fa-solid fa-triangle-exclamation"></i>
    </div>
  );
};