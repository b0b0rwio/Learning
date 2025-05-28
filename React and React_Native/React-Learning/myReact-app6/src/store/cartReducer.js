import { ADD_TO_CART, REMOVE_FROM_CART } from './actions/cartConstants';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existing = state.items.find(item => item.id === action.payload.id);
      const updatedItems = existing
        ? state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { ...action.payload, quantity: 1 }];

      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + action.payload.price,
      };

    case REMOVE_FROM_CART:
      const toRemove = state.items.find(item => item.id === action.payload.id);
      if (!toRemove) return state;

      return {
        ...state,
        items: state.items.filter(item => item.id !== toRemove.id),
        totalQuantity: state.totalQuantity - toRemove.quantity,
        totalAmount: state.totalAmount - toRemove.quantity * toRemove.price,
      };

    default:
      return state;
  }
};
