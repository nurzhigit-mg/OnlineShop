import React from 'react';
import {BsBasket} from 'react-icons/bs';
import {BsSuitHeartFill} from 'react-icons/bs';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProductCard = ({el}) => {
    const {basket} = useSelector(s => s.basket)
    const {favorite} = useSelector(s => s.favorite)
    const bas = basket.some(some => some.id === el.id)
    const dispatch = useDispatch()
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const addToFavorite = () => {
        dispatch({type: "ADD_TO_FAVORITE", payload: el})
    }
    const heart = favorite.some(some => some.id === el.id)
    return (
        <div
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl my-10 dark:border-gray-700 dark:bg-gray-800 ">
            <Link className="w-full" to={`/details/${el.id}`}>
                <img className="object-cover w-full  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                     src={el.image} alt=""/>
            </Link>

            <div className="flex flex-col p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.title}
                </h5>
                <h6 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {el.description}
                </h6>
                <div className="flex ">
                    {
                        bas ? <Link to={"/basket"}>
                                <button
                                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
                                    <BsBasket/>
                                </button>
                            </Link>
                            : <button onClick={addToBasket}
                                      className=" inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                                     <span
                                         className=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                       {Math.round(el.price)} $
                                     </span>
                            </button>
                    }
                    <button onClick={addToFavorite}
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4  text-center ml-7">
                        <BsSuitHeartFill className={heart ? "text-red-600 " : " text-white"}/>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductCard;