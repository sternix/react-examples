const Carousel = () => {
  return (
    <div id="home" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#home"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#home"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#home"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="static/la.jpg"
            alt="la"
            className="d-block"
          />
        </div>
        <div className="carousel-item">
          <img
            src="static/ny.jpg"
            alt="ny"
            className="d-block"
          />
        </div>
        <div className="carousel-item">
          <img
            src="static/chicago.jpg"
            alt="chicago"
            className="d-block"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#home"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#home"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;
