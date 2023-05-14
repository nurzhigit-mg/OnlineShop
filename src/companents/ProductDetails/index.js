import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {BsBasket, BsSuitHeartFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";

const Index = () => {
    const {favorite} = useSelector(s => s.favorite)
    const [details, setDetail] = useState({})
    const getDetails = () => {
        axios(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setDetail(res.data))
    }
    useEffect(() => {
        getDetails()
    }, [])
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: details})
    }
    const addToFavorite = () => {
        dispatch({type: "ADD_TO_FAVORITE", payload: details})
    }
    const heart = favorite.some(some => some.id === details.id)
    const dispatch = useDispatch()
    const {basket} = useSelector(state => state.basket)
    const bas = basket.some(some => some.id === details.id)

    const {id} = useParams()
    console.log(details)
    const {image, title, category, description} = details
    return (
        <div className="container  mx-auto w-5/6 py-26 flex pt-[70px]">
            <img src={image} className="w-1/3 py-5" alt=""/>
            <div className="px-16 py-9">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{title}</h1>
                <div className="flex">
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-500 dark:text-black">Category  </h3>
                    <h3 className="text-xl text-gray-900 dark:text-black">:  {category}</h3></div>

                <h4 className="mb-3 font-normal text-gray-900 dark:text-gray-700">{description}</h4>
                <div className="flex"><h2 className="text-2xl font-semibold text-grey-900 dark:text-black">Price : </h2>
                    <h2 className="text-2xl font-semibold text-green-600 "> {Math.round(details.price)} $</h2></div>
                <div>
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
                                       {/*{details.price}*/} Buy
                                     </span>
                            </button>
                    }
                    <button onClick={addToFavorite}
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-4 text-center ml-7">
                        <BsSuitHeartFill className={heart ? "text-red-600 " : " text-white"}/>
                    </button>
                    <Link to={"/product"} >
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-[40px]">
                            Return
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </Link>

                </div>


            </div>
        </div>
    );
};

export default Index;