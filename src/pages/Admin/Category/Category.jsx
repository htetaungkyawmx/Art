import React, { useEffect, useState } from 'react';
import AdminDashboard from '../AdminDashboard';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Category = () => {
    const [categories,setCategories]=useState([])
    const navigate = useNavigate()
    const newCategoryHandler = (e) => {
        e.preventDefault()
        navigate('/admin/categories/create')
    }
    const apiUrl='http://localhost:8080/categories'
    useEffect(() =>{
    axios
    .get(apiUrl)
    .then((response) =>{setCategories(response.data)
    console.log(response.data)})
    },[])
    const deleteHandler = (deleteId) =>{
        const apiUrl1=`http://localhost:8080/categories?id=${deleteId}`
        console.log(deleteId)
        axios
       .delete(apiUrl1)
       .then((response) =>{
            setCategories(response.data)
            console.log(response.data)
        })
    }
  return (
    <>
       <div className='flex justify-center'>
       <AdminDashboard/>
      <section className='text-center w-custom ml-60'>
      <h1 className='text-2xl font-bold mt-4 mb-12'>Category Page</h1>
      
<div className='w-full'>
<button type='submit' className='text-lg bg-gray-400 rounded-lg h-10 w-36 mb-4 float-end' onClick={newCategoryHandler}>
    New Category+
</button>
</div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg w-custom">
    <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400 font-medium">
        <thead className="text-lg text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Category ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Category Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {categories.map((category) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={category.id}>
                <td className="px-6 py-4">
                    {category.id}
                </td>
                <td className="px-6 py-4">
                    {category.name}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  onClick={()=>deleteHandler(category.id)}>Delete</a>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

      </section>
       </div>
    </>
  );
}

export default Category;
