import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, ListGroup, Table } from 'react-bootstrap';
import { Bar, Pie, Line } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, LineElement, PointElement);

function DashboardPage() {
  const barChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);

  const data = {
    latestHits: {
      featured: [43, 20, 39, 46, 86, 66, 80],
      latest: [88, 70, 79, 56, 50, 55, 72],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      popular: [32, 47, 38, 21, 55, 75, 70],
    },
    notifications: Array.from({ length: 30 }, (_, index) => ({
      message: `Notification message ${index + 1}: Example content for notification.`,
      pic: index % 2 === 0
        ? "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg"
        : "https://pbs.twimg.com/profile_images/952318165941477376/e-3MyGW3.jpg",
      time: `${index + 1} min ago`,
    })),
    orders: [
      {
        deliveryDate: "08:00, 18 Nov 2019",
        distance: 485,
        location: "London, UK",
        operators: "Oliver Trag",
        orderNo: 122349,
        startDate: "16:00, 12 Nov 2019",
        status: "Moving"
      },
      {
        deliveryDate: "04:00, 14 Nov 2019",
        distance: 360,
        location: "London, UK",
        operators: "Jacob Miller",
        orderNo: 122348,
        startDate: "11:00, 10 Nov 2019",
        status: "Pending"
      },
      {
        deliveryDate: "06:00, 28 Nov 2019",
        distance: 340,
        location: "London, UK",
        operators: "George Wilson",
        orderNo: 122347,
        startDate: "12:00, 22 Nov 2019",
        status: "Cancelled"
      },
      {
        deliveryDate: "09:00, 14 Nov 2019",
        distance: 218,
        location: "London, UK",
        operators: "William Aung",
        orderNo: 122346,
        startDate: "15:00, 10 Nov 2019",
        status: "Moving"
      },
      {
        deliveryDate: "06:00, 17 Nov 2019",
        distance: 280,
        location: "London, UK",
        operators: "Harry Ryan",
        orderNo: 122345,
        startDate: "15:00, 11 Nov 2019",
        status: "Pending"
      },
      {
        deliveryDate: "08:00, 18 Nov 2019",
        distance: 218,
        location: "London, UK",
        operators: "Michael Jones",
        orderNo: 122344,
        startDate: "18:00, 21 Oct 2019",
        status: "Pending"
      },
      {
        deliveryDate: "10:00, 18 Nov 2019",
        distance: 320,
        location: "London, UK",
        operators: "Oliver Queen",
        orderNo: 122343,
        startDate: "16:00, 17 Oct 2019",
        status: "Pending"
      },
      {
        deliveryDate: "08:00, 18 Nov 2019",
        distance: 466,
        location: "London, UK",
        operators: "Jacky Will",
        orderNo: 122342,
        startDate: "14:00, 16 Oct 2019",
        status: "Delivered"
      },
      {
        deliveryDate: "05:00, 18 Nov 2019",
        distance: 280,
        location: "London, UK",
        operators: "Thomas Ryan",
        orderNo: 122341,
        startDate: "14:00, 16 Oct 2019",
        status: "Delivered"
      }
    ],
    performance: {
      Aqua: 40,
      Blue: 44,
      Green: 28,
      Orange: 38,
      Purple: 58,
      Red: 34,
      Yellow: 48,
    },
    storage: {
      available: 9.15,
      system: 6.5,
      used: 18.24,
    },
  };

  const latestHitsData = {
    labels: data.latestHits.months,
    datasets: [
      {
        label: 'Featured',
        data: data.latestHits.featured,
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      },
      {
        label: 'Latest',
        data: data.latestHits.latest,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Popular',
        data: data.latestHits.popular,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const performanceData = {
    labels: Object.keys(data.performance),
    datasets: [
      {
        label: 'Performance',
        data: Object.values(data.performance),
        backgroundColor: [
          'rgba(0, 123, 255, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(201, 203, 207, 0.5)',
        ],
      },
    ],
  };

  const storageData = {
    labels: ['Available', 'System', 'Used'],
    datasets: [
      {
        label: 'Storage Data',
        data: [data.storage.available, data.storage.system, data.storage.used],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  useEffect(() => {
    const barChartInstance = barChartRef.current;
    const lineChartInstance = lineChartRef.current;
    const pieChartInstance = pieChartRef.current;

    // Cleanup function
    return () => {
      if (barChartInstance) barChartInstance.destroy();
      if (lineChartInstance) lineChartInstance.destroy();
      if (pieChartInstance) pieChartInstance.destroy();
    };
  }, []);

  

  return (
    <Container fluid style={{minHeight: '100vh', padding: '20px' }}>
      <h2 className="text-center my-4">Dashboard</h2>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Latest Hits</Card.Title>
              <div style={{ height: '400px' }}>
                <Bar ref={barChartRef} data={latestHitsData} options={{ maintainAspectRatio: false }} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Storage Information - Line Chart */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Storage Information</Card.Title>
              <div style={{ height: '300px' }}>
                <Line ref={lineChartRef} data={storageData} options={{ maintainAspectRatio: false }} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Performance Data and Notifications */}
      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Performance Data</Card.Title>
              <div style={{ height: '300px' }}>
                <Pie ref={pieChartRef} data={performanceData} options={{ maintainAspectRatio: false }} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Notifications */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Notifications</Card.Title>
              <ListGroup style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {data.notifications.slice(0, 10).map((notification, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex align-items-center notification-item"
                    style={{ transition: 'transform 0.3s' }} // Smooth transition for hover
                  >
                    <img
                      src={notification.pic}
                      alt="profile"
                      className="rounded-circle me-3"
                      style={{ width: '40px', height: '40px' }}
                    />
                    <div>
                      <p className="mb-0">{notification.message}</p>
                      <small className="text-muted">{notification.time}</small>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Orders Table */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Table striped bordered hover responsive style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Order No</th>
                    <th>Start Date</th>
                    <th>Delivery Date</th>
                    <th>Status</th>
                    <th>Operators</th>
                    <th>Location</th>
                    <th>Distance</th>
                  </tr>
                </thead>
                <tbody>
                  {data.orders.map((order, index) => (
                    <tr
                      key={index}
                      className="order-item"
                      style={{ transition: 'background-color 0.3s, transform 0.3s' }} // Smooth transition for hover
                    >
                      <td>{index + 1}</td>
                      <td>{order.orderNo}</td>
                      <td>{order.startDate}</td>
                      <td>{order.deliveryDate}</td>
                      <td>{order.status}</td>
                      <td>{order.operators}</td>
                      <td>{order.location}</td>
                      <td>{order.distance} km</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Styles for scroll and hover */}
      <style jsx>{`
        .notification-item:hover {
          transform: scale(1.05);
          background-color: #f8f9fa;
        }

        .order-item:hover {
          background-color: #e9ecef;
          transform: scale(1.02);
        }
      `}</style>
    </Container>
  );
}

export default DashboardPage;
