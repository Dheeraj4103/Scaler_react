import React from "react";
import Categories from "../../Components/Categories/Categories";
import ProductList from "../../Components/ProductList/ProductList";
import { useParams } from "react-router-dom";


function ProductsPage() {

    const params = useParams();
    console.log(params);

    return (
        
        <div>
                <Categories />
            <ProductList categoryId={ params.categoryId } />
        </div>
    );
}

export default ProductsPage;