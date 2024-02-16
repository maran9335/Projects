import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import  {useNavigate } from 'react-router-dom'; 
import Table from 'react-bootstrap/Table';
function TableFormat() {
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

function handleDelete(id){
    axios.delete(`https://65a7d4e494c2c5762da7af8a.mockapi.io/ecartwebsite/${id}`)
    .then((response) => {
        if(response.status===200){
            alert("Data is Delete")
        }
        else{
            console.error("Error:",response.statusText)
        }
     })

     .catch((error) => {
        console.log('Error:', error);
     }); 

}

 const update = useNavigate()
function handleUpdate(id){
update(`${id}`)
}

   return (
      <div>
      <h1> Table Format </h1>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Item Name</th>
          <th>Item Price</th>
          <th>Item Quantity</th>
          <th>Item Image</th>
          <th>Descriptions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       {product.map((product,index)=>(
        <tr key={product.id}>
        <td>{index+1}</td>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.image}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
         <td>
         <Button className='btn btn-warning' onClick={()=>handleUpdate(product.id)}>Update </Button>
         <Button className='btn btn-danger' onClick={()=>handleDelete(product.id)}>Delete</Button>
         </td>
        </tr>

   ))}
      </tbody>
    </Table>
    </div>
  );
}


export default TableFormat;
