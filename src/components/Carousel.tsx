import { useState } from "react";

const images = [
  {
    id: 1,
    alt: "Scenery 1",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    alt: "Scenery 2",
    src: "https://images.unsplash.com/photo-1606117331085-5760e3b58520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    alt: "Scenery 3",
    src: "https://images.unsplash.com/photo-1667971286579-63a5222780ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
];

function getNextIndex(currentIndex: number, length: number) {
  return (currentIndex + 1) % length;
}

function getPrevIndex(currentIndex: number, length: number) {
  return (currentIndex - 1 + length) % length;
}

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNextImage = () => setActiveIndex((prev) => getNextIndex(prev, images.length));
  const showPrevImage = () => setActiveIndex((prev) => getPrevIndex(prev, images.length));

  return (
    <div className="carousel">
      <ul className="carousel__slides">
        {images.map((image, index) => (
          <li
            key={image.id}
            className={`carousel__slide-container${activeIndex === index ? " is-active" : ""}`}
          >
            <div className="carousel__slide-img">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
            <div className="carousel__controls">
              <button
                type="button"
                className="carousel__control carousel__slide-prev"
                onClick={showPrevImage}
                aria-label="이전 이미지"
              >
                <span>&lsaquo;</span>
              </button>
              <button
                type="button"
                className="carousel__control carousel__slide-next"
                onClick={showNextImage}
                aria-label="다음 이미지"
              >
                <span>&rsaquo;</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="carousel__dots">
        {images.map((image, index) => (
          <button
            key={`dot-${image.id}`}
            type="button"
            className={`carousel__dot${activeIndex === index ? " is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`${image.alt} 보기`}
          />
        ))}
      </div>
    </div>
  );
}