import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AccountsPage() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Simulating stored data from localStorage or API call
    const storedData = {
      "Admin": {
        "email": "eduardfranz@gmail.com",
        "name": "Eduard Franz",
        "password": "jvoxidf09234",
        "phone": "123-456-7890",
        "profilePic": "https://media.gettyimages.com/id/1311161843/photo/man-drinking-whisky-on-ice-in-glass-while-watching-sunset-seattle-washington-united-states-usa.jpg?s=612x612&w=0&k=20&c=vPKwy9keZvMVqBADvSMiH2lJwPCflpoeDhH-0RbEKLs="
      },
      "Customer": {
        "email": "larathayer@rediffmail.com",
        "name": "Lara Thayer",
        "password": "238jf9823j",
        "phone": "987-654-3210",
        "profilePic": "https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb"
      },
      "Editor": {
        "email": "beckygeorge@ymail.com",
        "name": "Becky George",
        "password": "sdijv02394",
        "phone": "567-890-1234",
        "profilePic": "https://pbs.twimg.com/profile_images/952318165941477376/e-3MyGW3.jpg"
      },
      "Merchant": {
        "email": "craigchaney@hotmail.com",
        "name": "Craig Chaney",
        "password": "wd92jf09wu",
        "phone": "432-109-8765",
        "profilePic": "https://pbs.twimg.com/profile_images/883458234685587456/KtCFjlD4.jpg"
      },
      
    };

    const accountArray = Object.keys(storedData).map((key, index) => ({
      id: index + 1,
      ...storedData[key]
    }));

    setAccounts(accountArray);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="mb-4">Accounts</h2>
        </Col>
      </Row>
      <Row>
        {accounts.map((account) => (
          <Col md={4} key={account.id} className="mb-4">
            <Card
              className="h-100 shadow-sm"
              style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <Card.Img
                variant="top"
                src={account.profilePic}
                alt={account.name}
                className="rounded-circle mx-auto mt-3"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center">
                <Card.Title className="mt-3">{account.name}</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {account.email} <br />
                  <strong>Phone:</strong> {account.phone ? account.phone : 'N/A'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AccountsPage;
