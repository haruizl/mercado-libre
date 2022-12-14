import { useEffect, useState } from "react";
import styled from "styled-components";

const CarouselImg = styled.img`
  max-width: 1263px;
  height: 340px;
  opacity: 0;
  transition: 1s;
  object-fit:cover;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 15px;
`;

const CarouselButton = styled.button`
  color: white;
  background-color: #eb118a;
  padding: 8px;
  margin: 0 5px;
`;

interface Props {
  images: string[];
  autoPlay?: boolean;
  showButtons?: boolean;
}

export default function Carousel(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
      }, 10000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  };
  return (
    <>
    <div id="carouselId" className="carousel">
      <CarouselImg
        src={require(`../assets/img/${selectedImage}`).default}
        alt="Gentleman"
        className={loaded ? "loaded" : ""}
        onLoad={() => setLoaded(true)}
      />
      <CarouselButtonContainer>
        {props.showButtons ? (
          <>
            <button className="carousel-control-prev" type="button" onClick={previous}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={next}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          
          </>
        ) : (
          <></>
        )}
      </CarouselButtonContainer>
      </div>
    </>
  );
}
