import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';
import './order.css'
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
   const [addedOrder,setAddedOrder]=useState(false)
    useEffect(() => {
        fetch(`https://ancient-journey-25736.herokuapp.com/orders?email=`+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                if(data){
                    setAddedOrder(data)
                }
                setOrders(data)})
    }, [addedOrder])
    console.log(orders);
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
            <div>
            <Table responsive="sm">
                    <thead >
                        <tr>
                            <th>Product Image</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderList order={order}></OrderList>)
                        }
                        <>
                            <td><strong>Total</strong></td>
                            <td><strong></strong></td>
                            <td><strong></strong></td>
                            <td><strong></strong></td>
                            
                        </>
                    </tbody>
                </Table>
            </div>
        
        </div>
    );
};

export default Order;