import './App.css';
import Header from "./companents/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./companents/Home";
import Favorite from "./companents/Favorite";
import Product from "./companents/Product";
import Footer from "./companents/Footer";
import Basket from "./companents/Basket";
import ProductDetails from "./companents/ProductDetails";

function App() {
    return (
        <div className="App bg-gray-200">
           <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/favorite"} element={<Favorite/>}/>
                <Route path={"/product"} element={<Product/>}/>
                <Route path={"/basket"} element={<Basket/>}/>
                <Route path={"/details/:id"} element={<ProductDetails/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
