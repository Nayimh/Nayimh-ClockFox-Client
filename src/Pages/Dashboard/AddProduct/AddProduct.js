import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const AddProduct = () => {

    const [addProduct, setAddProduct ] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...addProduct};
        console.log(newProduct);
        newProduct[field] = value;
        setAddProduct(newProduct);
    }

    const handleProductSubmit = e => {
        const productAdd = {
            ...addProduct
        }
        fetch('https://sleepy-stream-55149.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productAdd)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert("Added Succesfully");
            }
        })
        e.target.reset();
        e.preventDefault();
    };
    
    return (
        <Container className="bg-dark px-4 py-5 mb-4 rounded">
            <Form className="mb-3 mx-5" onSubmit={handleProductSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Control type="text" name="name" onBlur={handleOnBlur} placeholder="Item Name" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control type="text" name="image" onBlur={handleOnBlur} placeholder="Image" required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Price"  name="price" onBlur={handleOnBlur} />
                    </Form.Group>
                </Row>

                <Form.Group as={Col}>
                    <textarea className="form-control" name="description" onBlur={handleOnBlur} rows="3" placeholder="Item Description"></textarea>
                </Form.Group>
                

                <div className="text-center mt-5">
                    <Button variant="danger" type="submit" className="w-50" >
                        Submit
                    </Button>
                </div>
          </Form>
        </Container>
    );
};

export default AddProduct;