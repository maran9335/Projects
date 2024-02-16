import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';


function Fromapi() {
  
  
    const [formdata, setformdata] = useState({
        name: "",
        price: "",
        quantity: "",
        image: "",
        features: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setformdata(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://65a7d4e494c2c5762da7af8a.mockapi.io/ecartwebsite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
        .then(response => {
            if (response.ok) {
                alert("Product is added");
            } else {
                alert("Product not added");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    return (
        <div>
            Ecart Website For Vegetable
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="ProductsName">
                    <Form.Label>Name of Product</Form.Label>
                    <Form.Control type="text" placeholder="name" value={formdata.name} name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductsPrice">
                    <Form.Label>Price of Product</Form.Label>
                    <Form.Control type="text" placeholder="Price" value={formdata.price} name="price" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductsQuantity">
                    <Form.Label>Quantity of Product</Form.Label>
                    <Form.Control type="text" placeholder="Quantity" value={formdata.quantity} name="quantity" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Productsimage">
                    <Form.Label>Image of Product</Form.Label>
                    <Form.Control type="text" placeholder="Image" value={formdata.image} name="image" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductDescription">
                    <Form.Label>Product Features</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Description" value={formdata.features} name="features" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type={"submit"}>Submit</Button>
                <Button variant="warning" type= {"button"} onClick={()=>{return passCompenet('./table')}}>View all details</Button>
            </Form>
        </div>
    );
}

export default Fromapi;
