import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function MyCarousel({ items }) {
  return (
    <Carousel
      style={{
        width: "400px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "100px",
      }}
    >
      {items.map((item) => (
        <Carousel.Item>
          <Link to={`/detail/${item.id}`}>
            <img
              className="d-block w-100"
              src={`/imagenes/${item.img}`}
              alt={item.title}
            />
          </Link>

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
