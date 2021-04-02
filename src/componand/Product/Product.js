
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './product.css';

const Product = (props) => {
   // console.log(props);
    let { photoURL, _id, Price, Product } = props.product;
    return (
        <Col md={6} lg={4}>
            <div className='singleProduct'>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white' }}>
                    <img style={{ height: '250px', width: '100%' }} src={photoURL} alt="picture" />
                </div>
                <div className='d-flex '>
                    <div> 
                        <p className='mt-2'><strong>{Product}</strong></p>
                        <p> <strong>Price:{Price} tk</strong> </p></div>
                    <div className='ml-auto d-flex align-items-center pr-2'>
                     <Link to={`/cheekOut/${_id}`}>  <button className='btn btn-outline-info'>Buy Now</button></Link> 
                    </div>
                </div>
            </div>

        </Col>
    );
};

export default Product;