import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesFailed, categoriesLoaded, categoriesLoading } from "../../Store/categories";


function Categories() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);

    useEffect(() => {
        async function loadingCategories() {
            dispatch(categoriesLoading());

            try {
                const response = await fetch("http://localhost:3001/categories");
                const data = await response.json();
                dispatch(categoriesLoaded(data));
            } 
            catch (error) {
                dispatch(categoriesFailed(error));
            }
        }
        loadingCategories(); 
    }, [])
    
    if (categories.isLoading) {
        return <div>Loading Categories ...</div>
    } 
    else if (categories.error) {
        return <div>Failed to load categories</div>
    }
    else {
        return (
            <ul>
                {
                    categories.categories.map(category => {
                       return <li key={category.id}>{category.name}</li>
                    })
                }
            </ul>
        );
    }
}

export default Categories;