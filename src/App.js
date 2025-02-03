import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router> {/* Using HashRouter */}
      <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        <NavigationBar onThemeToggle={handleThemeToggle} isDarkTheme={isDarkTheme} />
        
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/addNewProduct" element={<AddNewProductPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
