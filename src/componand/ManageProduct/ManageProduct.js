import React from 'react';


const ManageProduct = (props) => {
    const {Product,Price,_id}=props.pd;

    return (
    
            <tr>
                <td><strong>{Product}</strong></td>
                <td>1</td>
                <td><strong>{Price} Tk</strong></td>
                <td> <button onClick={()=> props.deleteIeams(_id)} className='btn btn-danger'>delete</button> </td>
            </tr>
        
    );
};

export default ManageProduct;