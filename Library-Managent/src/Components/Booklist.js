import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function Booklist() {
   const [product, setProduct] = useState([]);

   useEffect(() => {
      axios.get('https://65a8f935219bfa3718681011.mockapi.io/lib')
         .then((response) => {
            setProduct(response.data);
         })
         .catch((error) => {
            console.log('Error:',error);
         });
   }, []); 

   return (
      <div className="container mt-5">
         <h1>Product List</h1>
         <div className="row">
            {product.map((product) => (
               <div className='col-md-4 mb-3' key={product.id}>
                  <div className='card h-100'>
                     <img src={product.image} className='card-img-top' alt={product.name} style={{ height: '200px' }} />
                     <div className='card-body bg-warning'>
                        <h3 className='card-title'>Product Name: {product.name}</h3>
                        <p className='card-text'>Price: {product.price}</p>
                        <p className='card-text'>Quantity: {product.quantity}</p>
                        <Button className='btn btn-success' variant="success" type="submit"> <span></span>Add to cart</Button>
                                                    
                        <Link to={`/${product.id}`} className="btn btn-primary">click <span></span></Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Booklist;
