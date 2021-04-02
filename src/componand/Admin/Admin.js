import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import ManageProduct from '../ManageProduct/ManageProduct';
import './admin.css';
const Admin = () => {
    const [toggle, setToggle] = useState(true);
    const { register, handleSubmit, watch, errors } = useForm();
    const [photoURL, setPhotoURL] = useState(null);
    const onSubmit = data => {
        const ProductData = {
            Price: data.Price,
            Product: data.Product,
            photoURL: photoURL
        }
        const url = `https://ancient-journey-25736.herokuapp.com/addProduct`
        // console.log(ProductData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(ProductData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Product added successfully');
                }
            })
    }



    //photo send imgbb api and get image link

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '8bbd4614a65e8174ee9894087548fc04');
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setPhotoURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Manage Product
    const [manageProduct, setManageProduct] = useState([])
    const [deleteItem,setDeleteItem]=useState(false)
    useEffect(() => {
        fetch('https://ancient-journey-25736.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [deleteItem])

    // delete product
    const deleteIeams = (id) => {
        console.log('product deleted', id);
        fetch(`https://ancient-journey-25736.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {

                if (data) {
                    //alert('Product delete successfully')
                    setDeleteItem(data)
                }
            })
    }
   
    return (
        <div className="container d-flex">

            <div className="mt-3 btn-toggle" style={{ backgroundColor: '#203D37', width: '200px', height: '500px', color: 'white' }}>
                <p onClick={() => setToggle(true)} style={{ margin: '30px 40px' }}>Manage Product</p>
                <p onClick={() => setToggle(false)} style={{ margin: '30px 40px' }}>Add Product</p>
            </div>

            {
                toggle ?
                    <div className="ml-3 mt-3" style={{ border: '1px solid lightgray', width: '80%' }}>
                        <h1 className="mt-5 ml-3">Mange Product</h1>


                        <Table responsive="sm">
                            <thead >
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    manageProduct.map(pd => <ManageProduct deleteIeams={deleteIeams} pd={pd}></ManageProduct>)
                                }

                            </tbody>
                        </Table>

                    </div>
                    :
                    <div className="ml-3 mt-3" style={{ backgroundColor: '#F4FCFB', width: '80%' }}>
                        <h1 className="mt-5 ml-3">Add Product</h1>

                        <div className='ml-5'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='mb-3' placeholder='Product Name' name="Product" ref={register} /><br />
                                <input className='mb-3' placeholder='Add Price' name="Price" ref={register({ required: true })} /> <br />
                                <input className='mb-3' placeholder='Add Price' name="exampleRequired" type='file' onChange={handleImageUpload} /> <br />
                                <input className='btn btn-success' type="submit" />
                            </form>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Admin;