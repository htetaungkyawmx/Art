import React, { useState } from 'react';
import AdminDashboard from '../AdminDashboard';
import axios from 'axios';
import { useNavigate } from 'react-router';

const CategoryForm = () => {
    const [inputData,setInputData]=useState({
        "name": ""
    })
    const navigate=useNavigate()
    const inputHandler = (e) => {
        const categoryName=e.target.value
        setInputData({
           ...inputData,
            name: categoryName
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(!inputData.name){
            alert('Please fill category name') 
          }else{
        const apiUrl='http://localhost:8080/categories'
        axios
        .post(apiUrl, {name: inputData.name})
        .then((res) => {
             console.log(res)
         })
         window.location.reload()
         navigate('/admin/category')
        }
    }
  return (
    <>
    <div className='flex justify-center'>
       <AdminDashboard/>
      <section className='w-custom ml-60 text-xl'>
      <div className='w-inner m-auto mt-10'>
      <label className='text-left text-2xl font-medium'>Category</label>
      <div className="flex mt-4">
        <input type="email" className="block w-half h-12 border-2 border-gray-200 rounded-lg pl-3 bg-gray-50 shadow-sm" placeholder="Category Name" onChange={inputHandler} required/>
        <div className="pl-4">
        <button type="submit" className="bg-gray-300 w-24 h-12 rounded-xl font-semibold" onClick={submitHandler}>
            Submit
        </button>
        </div>
        </div>
      </div>
      </section>
      </div>
    </>
  );
}

export default CategoryForm;
