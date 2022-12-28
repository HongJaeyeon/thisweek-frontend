import '../App.css';
import Navbar from '../components/Navbar';
import CreateNote from '../components/CreateNote';
import Note from '../components/Note';
import { useState, useEffect } from 'react';

export default function Community() {
  const memberId = localStorage.getItem('meberId');
  const [data, setData] = useState(); 

  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch(`${process.env.BASE_URL}/api/v1/readall/newest`);
      setData(response);
  };
    fetchData();
    console.log(data);
  }, [])

  return (
    <div>
      <Navbar/>
      <div className="pt-12 bg-pink-200">
        <div className="text-center text-orange-500 text-9xl font-bold mb-10">This Week</div>
        <div className="mt-12 grid gap-10 grid-cols-5 grid-rows-2">
          <CreateNote/>
          {data?.result.map( (data, idx) => (<Note key={idx} title={data.title} content={data.content}></Note>) )}
        </div>
        <footer className="h-96"></footer>
      </div>
    </div>
  );
}