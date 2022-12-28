import '../App.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function CreateNote(){

  const {
    register,
    handleSubmit,
  } = useForm();

  const isLogined = localStorage.getItem('isLogined');

  const onSubmit = (data) => {
    fetch(`${process.env.BASE_URL}/api/v1/post`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: data.title,
        content: data.content,
        memberId: localStorage.getItem('meberId'),
      }),
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    });
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='rounded text-center rounded h-80 w-64 bg-yellow-100'> 
        { isLogined ?  
        <div>
          <input {...register('title', { require: true} )} placeholder='제목' className='bg-yellow-100'></input>
          <input {...register('content', { require: true} )} placeholder='내용' className='bg-yellow-100 h-56'></input>
          <button className='block'>등록</button>
        </div>
        :
        <div>
          <div className='pt-10 text-center'>로그인 후 이용하실 수 있습니다.</div>
          <Link to="/login" className="text-2xl font-bold text-blue-400">Login →</Link>
        </div>
        }
      </div>
    </form>
  )
}