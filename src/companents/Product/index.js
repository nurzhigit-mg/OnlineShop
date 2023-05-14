import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../Redux/Reducer";



const Product = () => {
    const dispatch = useDispatch()
const {product} = useSelector(s => s.main)
    useEffect(()=>{
        dispatch(getProduct())
    }, [])
    return (
        <div className="container mx-auto w-[93%]">
            <div className="flex py-10 px-2 flex-wrap justify-between ">
                {
                    product.map((el) => (
                        <ProductCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;