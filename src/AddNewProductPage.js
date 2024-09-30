import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddNewProductPage() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [stock, setStock] = useState('');
  const [unitsSold, setUnitsSold] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      productName,
      description,
      category,
      expireDate,
      stock: parseInt(stock),
      unitsSold: parseInt(unitsSold),
    };

    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    alert(`Product added: ${productName}`);
    navigate('/products');
  };

  return (
    <Container className="mt-5">
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProductName" className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCategory" className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formExpireDate" className="mb-3">
          <Form.Label>Expire Date</Form.Label>
          <Form.Control
            type="date"
            value={expireDate}
            onChange={(e) => setExpireDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formStock" className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter stock quantity"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formUnitsSold" className="mb-3">
          <Form.Label>Units Sold</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter units sold"
            value={unitsSold}
            onChange={(e) => setUnitsSold(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
  );
}

export default AddNewProductPage;
