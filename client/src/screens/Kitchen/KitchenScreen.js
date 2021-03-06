import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Carousel,
  Card,
  Row,
  Col,
  Image,
  Container,
  InputGroup,
} from "react-bootstrap";
import products from "../../products";
import ProductSmall from "../../components/ProductSmall";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../LivingRoom/LivingRoom.css";
import axios from "axios";

const Kitchen = () => {
  const [KitchenProducts, setKitchenProducts] = useState([]);
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    setKitchenProducts(
      products.filter((product) => product.category === "kitchen")
    );
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <div className='heroSection'>
        <div className='heroSectionText'>
          <h1>Kitchen</h1>
          <p>
            Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='heroSectionBackground'></div>
      </div>
      <Container>
        <Row style={{ position: "relative" }} className='mx-5 my-auto'>
          {KitchenProducts.map((product) => (
            <Col>
              <Row>
                <ProductSmall product={product} />
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Kitchen;
