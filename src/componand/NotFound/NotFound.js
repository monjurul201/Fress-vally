import React from 'react';

const NotFound = () => {
    return (
        <div style={{marginTop:'15%'}} className='d-flex justify-content-center'>
            <div>
                <h1 style={{ color: 'red',fontSize:'100px'}}>404</h1>
            </div>
            <div style={{marginLeft:'15px',fontSize:'30px'}}>
                <p>Oops! You're lost.</p>
                <p>The page you are looking for was not found</p>
            </div>
        </div>
    );
};

export default NotFound;