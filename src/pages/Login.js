import '../App.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("isLogined", true);
    return navigate("/community");
  }
  
  return(
    <div className="bg-pink-200">
      <Navbar/>
      <div className="mt-32 text-center text-orange-500 text-9xl font-bold mb-10">This Week</div>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-32 pb-16">
        <input {...register('email', { require: true} )} placeholder='Email' className='rounded-lg w-80 p-5 mb-5 block bg-yellow-100 m-auto'></input>
        <input {...register('password', { require: true} )} placeholder='PassWord' className='rounded-lg w-80 p-5 mb-5 block bg-yellow-100 m-auto'></input>
        <button className='rounded-lg w-80 p-5 block bg-red-200 m-auto hover:bg-red-300 tracking-widest font-bold text-xl text-blue-400'>L O G I N</button>
        <Link to="/join" className='mt-5 rounded-lg block ml-72 tracking-widest text-xl hover:font-bold text-red-400'>Go To Join →</Link>
      </form>
      <footer className="h-96"></footer>
    </div>
)
}
