import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ id, name, price, stock, img, fav }) => {
    const navigate = useNavigate();
    const addToCart = () => {
        navigate('/cart');
    }
  return (
    <>
        <div className="max-w-sm bg-white border-0 font-muli  rounded-lg shadow relative gap-4">
                <Link to={`/productDetail/${id}`}>
                    <div className='relative overflow-hidden rounded-lg'>
                        <img className="rounded-t-lg object-cover h-48 w-96 transition-transform duration-300 transform-gpu hover:scale-105 " src={img} />
                    </div>
                </Link>
                <div className="p-5 ">
                    <h5 className="mb-2 text-center  font-bold tracking-tight text-gray-900 text-xl  "> {name} </h5>
                    <p className="mb-3 text-base font-extralight text-center text-gray-700 dark:text-gray-400">Price : ${price}</p>
                    <h6 className='text-green-400 mb-3 ml-3'>in Stock:{stock}</h6>
                    <button onClick={addToCart} className='font-inter border bg-primary text-white border-gray p-3 w-full'>Add to Cart</button>
                    <Link to={'/favourite'}>
                        <button className='absolute top-5 right-5 p-2 text-center  rounded-full  bg-white'>
                            <h5 className=' rounded-full hover:text-blood text-2xl'>
                                {fav ? (
                                    <FaHeart className='text-blood' />

                                ) : (
                                    <CiHeart />
                                )}
                            </h5>
                        </button>
                    </Link>
                </div>
            </div>
    </>
  );
}

export default ProductCard;
