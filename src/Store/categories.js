
const Set_Selected_Category =  "Set_Selected_Category";
const Load_Categories_Start =  "Load_Categories_Start";
const Load_Categories_Done = "Load_Categories_Done";
const Load_Categories_Error =  "Load_Categories_Error";


export function categoriesLoading() {
    console.log('categories loading');
    return {
        type: Load_Categories_Start
    }
}
export function categoriesLoaded(categories) {
    return {
        type: Load_Categories_Done,
        payload: categories
    }
}
export function categoriesFailed(error) {
    return {
        type: Load_Categories_Error,
        payload: error
    }
}
// export function categoriesLoading(error) {
//     return {
//         type: Load_Categories_Start,

//     }
// }




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
