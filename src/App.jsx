
import { useDispatch } from "react-redux";
import store1 from './Store/index';
import { Routes, Route } from 'react-router-dom';

import CartPage from "./Pages/CartPage/CartPage";
import ProductsPage from "./Pages/ProductsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import OrderPage from "./Components/OrderPage";
import BestPracticesPage from "./Pages/BestPracticesPage";
import { usePersistenCart } from "./Components/hooks/usePersistentCart";
console.log('multiple reducer',store1.getState());



function App() {

    /* 
    cart = {
        <product.id> : {
            id: Number,
            title: String,
            price: Number,
            quantity: Number
        }
    }
    */

    // const [cart, setCart] = useState({});
    const dispatch = useDispatch();
    
    usePersistenCart();

    console.log('App rendered');

    // function increaseQuantity(product) {
    //     dispatch(addtocart(product));
        
    // }

    // function decreaseQuantity(product) {

    //     dispatch(removefromcart(product));
    // }

    return (
        
            <Routes>
            <Route exact={ true } path="/" Component={ProductsPage}/>
            <Route exact={true} path="/cart" Component={CartPage} />
            <Route exact={true} path="/orders" Component={OrderPage} />
            <Route exact={true} path="/best-practices" Component={BestPracticesPage} />
            <Route  path="/categories/:categoryId" Component={ProductsPage} />
            <Route  Component={NotFoundPage} />
            </Routes>
           

        // <div>
        //     <CartPage></CartPage>
        //     <ProductsPage/>
        // </div>
    
        
                );
                
}

export default App