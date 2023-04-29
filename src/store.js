const { omit } = require("lodash");
const { createStore } = require('redux');

const addToCart = 'Add_To_Cart';
const removeFromCart = "Remove_From_Cart";
const showCart = "Show_Cart";
const hideCart = "Hide_Cart";

export function addtocart(product) {
  return {
    type: addToCart,
    payload: product,
  }
}
export function removefromcart(product) {
  return {
    type: removeFromCart,
    payload: product,
  }
}

export function showcart() {
  return {
    type: showCart,
    payload: {}
  }
}
export function hidecart() {
  return {
    type: hideCart,
    payload: {}
  }
}

function cartReducer(state = { items: {}, isCartOpen: false }, action) {
  console.log("Redux called", state, action); 
  switch (action.type) {
    case "Show_Cart":
      return { ...state, isCartOpen: true };

    case "Hide_Cart":
      return { ...state, isCartOpen: false };

    case "Add_To_Cart": {
      // Do some changes and return new state
      const product = action.payload;
      if (state.items[product.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1,
            },
          },
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1,
            },
          },
        };
      }
    }

    case "Remove_From_Cart":
      // Do some changes and return new state
      const product = action.payload;

      if (state.items[product.id].quantity <= 1) {
        return {
          ...state,
          items: omit(state.items, [product.id]),
        }
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1,
            },
          },
        };
      }

    default:
      return state;
  }
}

const store = createStore(cartReducer);

export default store;