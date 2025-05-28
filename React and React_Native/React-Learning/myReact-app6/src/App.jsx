// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/cart';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
