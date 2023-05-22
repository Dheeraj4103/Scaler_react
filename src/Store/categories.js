

const Set_Selected_Category = "Set_Selected_Category";
const Load_Categories_Start = "Load_Categories_Start";
const Load_Categories_Done = "Load_Categories_Done";
const Load_Categories_Error = "Load_Categories_Error";

export function categoriesLoading() {
  console.log("categories loading");
  return {
    type: Load_Categories_Start,
  };
}
export function categoriesLoaded(categories) {
  return {
    type: Load_Categories_Done,
    payload: categories,
  };
}
export function categoriesFailed(error) {
  return {
    type: Load_Categories_Error,
    payload: error,
  };
}
// export function categoriesLoading(error) {
//     return {
//         type: Load_Categories_Start,

//     }
// }

export function loadingCategories() {
  return async (dispatch, getState) => {
    const { categories } = getState();
    if (categories.isLoading) return;

    dispatch(categoriesLoading());

    try {
      const response = await fetch("http://localhost:3001/categories");
      if (response.ok) {
        const data = await response.json();
        dispatch(categoriesLoaded(data));
      } else {
        dispatch(categoriesFailed(new Error(response.statusText)));
      }
    } catch (error) {
      dispatch(categoriesFailed(error));
    }
  };
}

function categoriesReducer(
  state = {
    isLoading: false,
    error: null,
    categories: [],
    selectedCategoryId: null,
    
  },
  action
) {
  switch (action.type) {
    case "Set_Selected_Category":
      return { ...state, selectedCategoryId: action.payload };
    case "Load_Categories_Start":
      return { ...state, isLoading: true };
    case "Load_Categories_Done":
      return { ...state, isLoading: false, categories: action.payload };
    case "Load_Categories_Error":
      return { ...state, isLoading: true, error: action.payload };
    default:
      return state;
  }
}

export default categoriesReducer;
