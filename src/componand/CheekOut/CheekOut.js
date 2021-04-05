import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheekOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const { pdKey } = useParams();
    const [product, setProduct] = useState([]);

    //loadData from server

    useEffect(() => {
        fetch('https://ancient-journey-25736.herokuapp.com/events')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                const sellectedProduct = data.find((task => task._id === pdKey))
                setProduct(sellectedProduct)
            })
    }, [pdKey])
    console.log(product);

    const { Product, Price, photoURL } = product;
    const newProduct = {
        name: Product,
        price: Price,
        image: photoURL
    }
    //console.log(newProduct)

    const handleCheek = () => {

        const productInfo = { ...loggedInUser, ...newProduct, date: new Date() }
        //console.log(productInfo);

        fetch('https://ancient-journey-25736.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order Succesfully');
                }
            })

    }
    return (

        <div style={{ marginTop: '15%' }} className="container">
            <h1 className='mt-5'>Cheek Out</h1>
            <div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                <Table responsive="sm">
                    <thead >
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{Product}</strong></td>
                            <td>1</td>
                            <td><strong>{Price} Tk</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td></td>
                            <td><strong>{Price} Tk</strong></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Link to='/order'><button onClick={handleCheek} style={{ marginLeft: 'auto' }} className='btn btn-success '>CheekOut</button></Link>
        </div>
    );
};

export default CheekOut;