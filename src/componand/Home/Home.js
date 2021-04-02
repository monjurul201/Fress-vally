import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [products,setProducts]=useState([]);
    useEffect(() =>{
        fetch('https://ancient-journey-25736.herokuapp.com/events')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <Container className='mt-5'>
            <Row>
                {
                    products.map( product => <Product key={product._id} product={product}></Product>)
                }
            </Row>
        </Container>
    );
};

export default Home;