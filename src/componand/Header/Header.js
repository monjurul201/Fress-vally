import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Navbar.Brand className='ml-5' as={Link} to="/home">SuperShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto pr-5">
                        <Nav.Link className='mr-4' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='mr-4' as={Link} to="/order">Order</Nav.Link>
                        <Nav.Link className='mr-4' as={Link} to="/Admin">Admin</Nav.Link>
                        <Nav.Link className='mr-4' as={Link} to="/deals">Deals</Nav.Link>
                        {
                            loggedInUser ? <p style={{color:'black'}} className='mt-2'>{loggedInUser.userName}</p> : <Nav.Link className='mr-4' as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;

