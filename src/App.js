import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import NotFound from './NotFound';
import ForgetPass from './pages/ForgetPass';
import ResetPass from './ResetPass';
import Addproducts from './pages/Addproducts';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/forgetpass" element={<ForgetPass/>} />
          <Route path="/resetpass" element={<ResetPass/>} />
          <Route path="/addproducts" element={<Addproducts/>} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;