import React from 'react';
import {useSelector} from "react-redux";
import BasketCard from "./BasketCard";

const Basket = () => {
    const {basket} = useSelector(state => state.basket)

    return (
        <div
         className=" py-28 bg-gray-400 ">
            <table className="container h-24 mx-auto w-5/6 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        image
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                        count
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                        price
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg ">
                        action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map((el) => (<BasketCard el={el}/>))
                }
                </tbody>
            </table>
        </div>
    );
};
export default Basket;