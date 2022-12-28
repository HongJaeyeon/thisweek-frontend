import '../App.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';

export default function Join() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/member/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.email,
        nickname: data.nickName,
        password: data.password,
      }),
    })
    .then(response => response.json())
    .then(response => {
      localStorage.setItem("memberId", response.body.result.id);
      return navigate("/login");
    });
  }

  return(
    <div className="bg-pink-200">
    <Navbar/>
    <div className="mt-32 text-center text-orange-500 text-9xl font-bold mb-10">This Week</div>
    <form onSubmit={handleSubmit(onSubmit)} className="pt-32 pb-16">
      <input {...register('nickName', { require: true} )} placeholder='NickName' className='rounded-lg w-80 p-5 mb-5 block bg-yellow-100 m-auto'></input>
      <input {...register('email', { require: true} )} placeholder='Email' className='rounded-lg w-80 p-5 mb-5 block bg-yellow-100 m-auto'></input>
      <input {...register('password', { require: true} )} placeholder='PassWord' className='rounded-lg w-80 p-5 mb-5 block bg-yellow-100 m-auto'></input>
      <button className='rounded-lg w-80 p-5 block bg-red-200 m-auto hover:bg-red-300 tracking-widest font-bold text-xl text-blue-400'>J O I N</button>
    </form>
    <footer className="h-96"></footer>
    </div>
  )
}
