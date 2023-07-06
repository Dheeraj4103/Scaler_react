import { useSelector } from "react-redux";

const Load_Products_Start = "Load_Products_Start";
const Load_Products_Done = "Load_Products_Done";
const Load_Products_Error = "Load_Products_Error";

export function productsLoading() {
  console.log("categories loading");
  return {
    type: Load_Products_Start,
  };
}
export function productsLoaded(products) {
  return {
    type: Load_Products_Done,
    payload: products,
  };
}
export function productsFailed(error) {
  return {
    type: Load_Products_Error,
    payload: error,
  };
}
// export function categoriesLoading(error) {
//     return {
//         type: Load_Categories_Start,

//     }
// }

export function loadingProducts(selectedCategoryId) {
  return async (dispatch, getState) => {
    const { prodcuts } = getState();
    // if (prodcuts.isLoading) return;

    dispatch(productsLoading());

    

    try {
      const response = await fetch(
        `http://localhost:3001/categories/products/${selectedCategoryId}/`
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(productsLoaded(data));
      } else {
        dispatch(productsFailed(new Error(response.statusText)));
      }
    } catch (error) {
      dispatch(productsFailed(error));
    }
  };
}

function productsReducer(
  state = {
    isLoading: false,
    error: null,
    products: [],
  },
  action
) {
  switch (action.type) {
    case "Load_Products_Start":
      return { ...state, isLoading: true };
    case "Load_Products_Done":
      return { ...state, isLoading: false, products: action.payload };
    case "Load_Products_Error":
      return { ...state, isLoading: true, error: action.payload };
    default:
      return state;
  }
}

export default productsReducer;
