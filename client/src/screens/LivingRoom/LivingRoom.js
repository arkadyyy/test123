import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { ProductsRequest } from "../../actions/ProductAction";

const LivingRoom = () => {
  const [livingRoomProducts, setlivingRoomProducts] = useState([]);
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductsRequest());
    setlivingRoomProducts(
      products.filter((product) => product.category === "living_room")
    );
  }, [dispatch]);

  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />

      <div className='heroSection'>
        <div className='heroSectionText'>
          <h1>Living Room</h1>
          <p>
            Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='heroSectionBackground'></div>
      </div>

      <Container>
        <Row style={{ position: "relative" }} className='mx-5 my-auto'>
          {livingRoomProducts.map((product) => (
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

export default LivingRoom;
