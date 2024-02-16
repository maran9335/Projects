import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import  { FaYoutube } from 'react-icons/fa';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function ProductList() {
   const [product, setProduct] = useState([]);

   useEffect(() => {
      axios.get('https://65a7d4e494c2c5762da7af8a.mockapi.io/ecartwebsite')
         .then((response) => {
            setProduct(response.data);
         })
         .catch((error) => {
            console.log('Error:', error);
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
                        <Button className='btn btn-success' variant="success" type="submit"> <span><FaYoutube/></span>Add to cart</Button>
                        
                        <Link to={`/${product.id}`} className="btn btn-primary"> <span></span><FontAwesomeIcon icon={faCartShopping} /></Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ProductList;
