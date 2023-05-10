import React, {memo} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingCategories } from "../../Store/categories";
import CategoryLink from "../CategoryLink/CategoryLink";
import styles from './Categories.module.css';
import Cart from "../Cart";


function Categories() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const cart = useSelector(state => {
        return state.cart.items;
    })

    useEffect(() => {
        
        // loadingCategories(); 
        dispatch(loadingCategories());
    }, [])
    
    if (categories.isLoading) {
        return <div>Loading Categories ...</div>
    } 
    else if (categories.error) {
        return <div>Failed to load categories</div>
    }
    else {
        return (
            <ul className={styles.list}>
                {
                    categories.categories.map(category => {
                       return <CategoryLink key={category.id} category={category}/>
                    })
                }
                <Cart></Cart>
                
            </ul>
        );
    }
}

export default memo(Categories);