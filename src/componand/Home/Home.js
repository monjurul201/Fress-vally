import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [spiner, setSpiner] = useState(false);
  useEffect(() => {
    fetch("https://ancient-journey-25736.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSpiner(true);
      });
  }, []);
  return (
    <Container className="mt-5">
      {spiner ? (
        <Row>
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      ) : (
        <div style={{textAlign:'center',marginTop:'20%'}}>
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </Container>
  );
};

export default Home;
