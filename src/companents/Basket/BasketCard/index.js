import React from 'react';
import {AiTwotoneDelete} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";

const BasketCard = ({el}) => {

    const dispatch = useDispatch()
    const delBasket = () =>{
        dispatch({type:"DELETE_BASKET",payload:el})
    }
    const addProduct = () => {
        dispatch({type:"ADD_TO_BASKET",payload:el})
    }
    const decProduct = () => {
        dispatch({type:"DEC_BASKET",payload:el})
    }

    return (
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-l-lg">
                    <img src={el.image} width="100px" alt=""/>
                </th>
                <td className="px-6 py-4 ">
                    <h1>{el.title}</h1>
                </td>
                <td className="px-6 py-4">
                    <div className="flex">  
                        <button onClick={decProduct}>-</button>
                        <h1 className="m-2">{el.count}</h1>
                        <button onClick={addProduct}>+</button>
                    </div>
                </td>
                <td className="px-6 py-4 ">
                    {Math.round(el.price * el.count) } $
                </td>
                <th scope="col" className="px-2 py-3 rounded-r-lg">
                    <button type="button"
                            onClick={delBasket}
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        <AiTwotoneDelete/>
                    </button>
                </th>
            </tr>
    );
};
export default BasketCard;