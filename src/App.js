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
    // Use HashRouter instead of BrowserRouter
    <Router>
      <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        {/* Pass theme toggle handler to NavigationBar */}
        <NavigationBar onThemeToggle={handleThemeToggle} isDarkTheme={isDarkTheme} />

        {/* Define routes for the app */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/addNewproduct" element={<AddNewProductPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
