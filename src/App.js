import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import ProductsPage from './ProductsPage';
import AddNewProductPage from './AddNewProductPage';
import AccountsPage from './AccountsPage';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  console.log('App is rendering'); // Check if App component renders

  return (
    // Add basename to Router for GitHub Pages
    <Router basename={process.env.PUBLIC_URL}>
      <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        {/* Pass theme toggle handler to NavigationBar */}
        <NavigationBar onThemeToggle={handleThemeToggle} isDarkTheme={isDarkTheme} />

        {/* Define routes for the app */}
        <Routes>
          {/* Route for Login Page */}
          <Route path="/LoginPage" element={<LoginPage />} />

          {/* Route for Dashboard */}
          <Route path="/DashboardPage" element={<DashboardPage />} />

          {/* Route for Products Page */}
          <Route path="/ProductsPage " element={<ProductsPage />} />

          {/* Route for Add New Product */}
          <Route path="/AddNewProductPage" element={<AddNewProductPage />} />

          {/* Route for Accounts Page */}
          <Route path="/AccountsPage" element={<AccountsPage />} />

          {/* Default route */}
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
