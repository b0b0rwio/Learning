// src/components/Cart.jsx
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/actions/cartActions';
import { Link } from 'react-router-dom';

function Cart() {
  const { items, totalAmount, totalQuantity } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map(item => (
          <div key={item.id}>
            {item.name} x {item.quantity} = ₹{item.quantity * item.price}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => dispatch(removeFromCart(item))}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <hr />
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ₹{totalAmount}</p>

      <Link to="/" style={{ display: 'inline-block', marginTop: '10px' }}>
        ← Back to Products
      </Link>
    </div>
  );
}

export default Cart;
