import React from 'react';
import { Link } from 'react-router-dom';
import { LuPaintBucket } from "react-icons/lu";
import User from './User';

const Dashboard = () => {
    return (
        <>
            <div className='px-10 font-muli'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-between mb-5 '>
                        <form className="flex max-w-sm ">
                            <label for="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ........" required />
                            </div>
                            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>
                    </div>

                    <Link to='/adminprofile' className=''>
                        <img className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" alt="Bordered avatar" />
                    </Link>


                </div>

                <div className=''>
                    <div className='grid grid-cols-3 gap-4'>

                        <div className='col-span-1 bg-primary rounded-lg p-12 text-center text-white '>
                            <LuPaintBucket className='w-14 h-14 rounded-full ' />
                            <h2 className=''>Gallery</h2>
                            <p>Count:2</p>

                        </div>
                        <div className='col-span-1 bg-primary rounded-lg p-12 text-center text-white '>
                            <LuPaintBucket className='w-14 h-14 rounded-full' />
                            <h2 className=''>Gallery</h2>
                            <p>Count:2</p>

                        </div>
                        <div className='col-span-1 bg-primary rounded-lg p-12 text-center text-white '>
                            <LuPaintBucket className='w-14 h-14 rounded-full' />
                            <h2 className=''>Gallery</h2>
                            <p>Count:2</p>

                        </div>
                        <div className="col-span-3">
                            <User />

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Dashboard;
