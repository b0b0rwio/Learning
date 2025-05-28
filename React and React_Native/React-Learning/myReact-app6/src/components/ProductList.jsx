// src/components/ProductList.jsx
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Apple', price: 20 },
  { id: 2, name: 'Banana', price: 10 },
  { id: 3, name: 'Orange', price: 15 },
  { id: 4, name: 'Kiwi', price: 35 }
];

function ProductList() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.totalQuantity);
  const fullData = useSelector((state) => state );
  console.log("fullData",fullData);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div style={{ padding: '20px' }}>

      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
        <Link to="/cart" style={{ position: 'relative', textDecoration: 'none' }}>
          <span style={{ fontSize: '24px' }}>🛒</span>
          {totalQuantity > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px',
              }}
            >
              {totalQuantity}
            </span>
          )}
        </Link>
      </div>

      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          {product.name} - ₹{product.price}
          <button
            style={{ marginLeft: '10px' }}
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
