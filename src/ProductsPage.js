import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import 'animate.css'; // Add animate.css for animations

const ProductsPage = () => {
  const [data, setData] = useState({
    categories: [
      'New Arrival', 'Latest Fashion', 'Trending', 'Christmas Special', 'New Year Special'
    ],
    products: [
      {
        category: 'New Arrival',
        description: 'Product 1 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony...',
        expireDate: '28 March 2019',
        name: 'Product 1',
        stock: '550',
        unitSold: '1,450',
      },
      {
        category: 'Christmas Special',
        description: 'Product 2 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony...',
        expireDate: '21 March 2019',
        name: 'Product 2',
        stock: '750',
        unitSold: '1,200',
      },
      {
        category: "New Arrival",
        description: "Product 1 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "28 March 2019",
        name: "Product 1",
        stock: "550",
        unitSold: "1,450"
      },
      {
        category: "Christmas Special",
        description: "Product 2 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "21 March 2019",
        name: "Product 2",
        stock: "750",
        unitSold: "1,200"
      },
      {
        category: "Christmas Special",
        description: "Product 3 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "24 February 2019",
        name: "Product 3",
        stock: "650",
        unitSold: "1,000"
      },
      {
        category: "Trending",
        description: "Product 4 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "22 February 2019",
        name: "Product 4",
        stock: "400",
        unitSold: "1,400"
      },
      {
        category: "Trending",
        description: "Product 5 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "18 February 2019",
        name: "Product 5",
        stock: "350",
        unitSold: "1,800"
      },
      {
        category: "Trending",
        description: "Product 6 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "30 January 2019",
        name: "Product 6",
        stock: "850",
        unitSold: "1,500"
      },
      {
        category: "Latest Fashion",
        description: "Product 7 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "15 January 2019",
        name: "Product 7",
        stock: "500",
        unitSold: "1,350"
      },
      {
        category: "New Arrival",
        description: "Product 8 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "05 January 2019",
        name: "Product 8",
        stock: "750",
        unitSold: "1,550"
      },
      {
        category: "New Year Special",
        description: "Product 9 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "30 December 2018",
        name: "Product 9",
        stock: "300",
        unitSold: "1,900"
      }
      
    ]
  });

  const [filterCategory, setFilterCategory] = useState('All');
  const navigate = useNavigate(); 

  // Fetch products from localStorage and merge them with the existing products
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    if (storedProducts.length > 0) {
      setData((prevData) => ({
        ...prevData,
        products: [...prevData.products, ...storedProducts],
      }));
    }
  }, []);

  const deleteCategory = (category) => {
    setData({
      ...data,
      categories: data.categories.filter((cat) => cat !== category),
      products: data.products.filter((prod) => prod.category !== category),
    });
  };

  const deleteProduct = (productName) => {
    setData({
      ...data,
      products: data.products.filter((prod) => prod.name !== productName),
    });
  };

  const handleFilterClick = (category) => {
    setFilterCategory(category);
  };

  const filteredProducts = filterCategory === 'All' 
    ? data.products 
    : data.products.filter((product) => product.category === filterCategory);

  return (
    <Container fluid className=" p-4">
      <Row>
        <Col md={9}>
          <h2 className="mb-4">Product List</h2>
          <Table striped hover className="bg-white">
            <thead className="bg-primary text-white">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Expire Date</th>
                <th>Stock</th>
                <th>Unit Sold</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.expireDate}</td>
                  <td>{product.stock}</td>
                  <td>{product.unitSold}</td>
                  <td>
                    <Button variant="danger" onClick={() => deleteProduct(product.name)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          
          <Button 
            variant="success" 
            className="mt-3 animate__animated animate__fadeInUp" 
            onClick={() => navigate('/add-new-product')}
          >
            Add New Product
          </Button>
        </Col>

        <Col md={3}>
          <h4>Categories</h4>
          <ul className="list-group mb-3">
            <li
              className={`list-group-item ${filterCategory === 'All' ? 'active' : ''}`}
              onClick={() => handleFilterClick('All')}
              style={{ cursor: 'pointer' }}
            >
              All
            </li>
            {data.categories.map((category, index) => (
              <li
                key={index}
                className={`list-group-item ${filterCategory === category ? 'active' : ''}`}
                onClick={() => handleFilterClick(category)}
                style={{ cursor: 'pointer' }}
              >
                {category}
                <Button 
                  variant="outline-danger" 
                  size="sm" 
                  className="float-end"
                  onClick={() => deleteCategory(category)}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
          <Button variant="primary" className="animate__animated animate__fadeInUp">
            Add New Category
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
