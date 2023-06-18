import Home from "./pages/Home";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./components/CheckoutSuccess";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Summary from "./components/admin/Summary";
import CreateProduct from "./components/admin/CreateProduct"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";



function App() {
    const user   =true;
    return (
        
     
          <Router>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/products/:category" element={<ProductList/>}></Route>
                <Route path="/product/:id" element={<Product/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/checkout-success" element={<Success/>}></Route>
                <Route path="/login" element= {<Login/>}> </Route>
                <Route path="/register"  element={<Register/>} ></Route>
                <Route path="/admin" element={<Dashboard/>}>
                   <Route path="products" element={<Products/>}>
                   <Route path="create-product" element={<CreateProduct/>}></Route>
                   </Route> 
                   <Route path="summary" element={<Summary/>}></Route> 

                </Route>

            </Routes>
          </Router>
       
     
    );


};

export default App;
