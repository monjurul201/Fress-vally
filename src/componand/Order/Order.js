import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import './order.css'
const Order = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
   
    useEffect(() => {
        fetch(`https://ancient-journey-25736.herokuapp.com/orders?email=`+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='container'>
            <div className='userProfile d-flex py-3'>
                <div className='userProfile'>
                    <img src={loggedInUser.userPhoto} alt="" />
                </div>
                <div className='ml-3 py-3'>
                    <h4>{loggedInUser.userName}</h4>
                    <p>{loggedInUser.email}</p>
                </div>
            </div>
        
        </div>
    );
};

export default Order;