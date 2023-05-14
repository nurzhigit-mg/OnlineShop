import React from 'react';
import ProductCard from "../Product/ProductCard";
import {useSelector} from "react-redux";

const Favorite = () => {
    const {favorite} = useSelector(state => state.favorite)
    return (
        <div className="container mx-auto w-[93%]">
            <div className="flex py-10 px- flex-wrap justify-between ">
                {
                    favorite.map((el) =>(
                        <ProductCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Favorite;