import React from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import "../css/Slide.css";

function Sliderpath() {
  return (
    <Carousel variant="dark" className="slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pet-supermarket.co.uk/image/upload/f_auto,t_compressed/w_auto,c_fill/v1660129178/On%20Site%20Media%202021/2022/Homepage/Hero%20banners/August/Hero_banner_centralised_3.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pet-supermarket.co.uk/image/upload/f_auto,t_compressed/w_auto,c_fill/v1658759743/On%20Site%20Media%202021/2022/Homepage/Hero%20banners/August/Summer_savings_Desktop.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pet-supermarket.co.uk/image/upload/f_auto,t_compressed/w_auto,c_fill/v1658918752/On%20Site%20Media%202021/2022/Homepage/Hero%20banners/August/Homepage_Hero_Banner_-_Burns_-_August_2022_Desktop.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.pet-supermarket.co.uk/image/upload/f_auto,t_compressed/w_auto,c_fill/v1658759743/On%20Site%20Media%202021/2022/Homepage/Hero%20banners/August/Homepage_Hero_Banner_-_Best_pet_parent_-_August_2022_Desktop_1920x550.png"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliderpath;
