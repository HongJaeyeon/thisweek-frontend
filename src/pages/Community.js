import '../App.css';
import Navbar from '../components/Navbar';
import Note from '../components/Note';
import { useState, useEffect } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Community() {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  const isLogined = localStorage.getItem('isLogined');

  const onSubmit = (data) => {
    fetch("http://52.79.246.204:4041/api/v1/post", {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: data.title,
        content: data.content,
        memberId: localStorage.getItem('memberId'),
      }),
    })
    .then(response => response.json())
    .then(response => {
      if (response.header.code === 200){
        fetchData();
        setValue("title", "");
        setValue("content", "");
      }
    });
  }

  const [data, setData] = useState(); 

  const fetchData = () => {
    fetch('http://52.79.246.204:4041/api/v1/readall/newest', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(response => { 
      if (response.header.code === 200){
        setData(response.body.result);
      }
    })
};

useEffect(()=>{fetchData()},[])

  return (
    <div>
      <Navbar/>
      <div className="pt-12 bg-pink-200">
        <div className="text-center text-orange-500 text-9xl font-bold mb-10">This Week</div>
        <div className="mt-12 grid gap-10 grid-cols-5 grid-rows-2">
        <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
          <div className='text-center rounded h-80 w-64 bg-yellow-100'> 
            { isLogined ?  
            <div>
              <input {...register('title', { require: true} )} placeholder='제목' className='text-center text-xl font-bold bg-yellow-100 mt-5'></input>
              <input {...register('content', { require: true} )} placeholder='내용' className='text-center bg-yellow-100 w-56 h-48 mt-5'></input>
              <button className='block m-auto font-bold text-blue-400'>작성</button>
            </div>
            :
            <div className='pt-32 text-center mb-4'>
              <Link to="/login" className="text-2xl font-bold text-blue-400">Login →</Link>
              <div>로그인 후 이용하실 수 있습니다.</div>
            </div>
            }
          </div>
        </form>
          {data?.map( (data, idx) => (<Note key={idx} title={data.title} content={data.content}></Note>) )}
        </div>
        <footer className="h-96"></footer>
      </div>
    </div>
  );
}