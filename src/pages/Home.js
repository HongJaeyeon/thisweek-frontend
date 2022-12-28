import '../App.css';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const categories = [
    "musical",
    "concert",
    "acting",
    "classic",
    "sport",
    "leisure",
    "exhibition",
]
  const [category, setCategory] = useState("musical");
  const [renderingData, setRenderingData] = useState([]);

  const data = [
    {
      img: "img.png",
      title: "뮤지컬 '영웅'",
      date: "12.21 ~ 02.28",
      category: "musical",
    },
    {
      img: "img.png",
      title: "뮤지컬 '영웅'",
      date: "12.21 ~ 02.28",
      category: "musical",
    },
    {
      img: "img.png",
      title: "뮤지컬 '영웅'",
      date: "12.21 ~ 02.28",
      category: "musical",
    },
    {
      img: "img.png",
      title: "뮤지컬 '영웅'",
      date: "12.21 ~ 02.28",
      category: "musical",
    },
    {
      img: "img.png",
      title: "뮤지컬 '영웅'",
      date: "12.21 ~ 02.28",
      category: "musical",
    },
    {
      img: "img.png",
      title: "뮤지컬 '영웅'",
      date: "12.21 ~ 02.28",
      category: "musical",
    },
    {
      img: "img.png",
      title: "뮤지컬 '영웅'",
      date: "12.21 ~ 02.28",
      category: "musical",
    },
    {
      img: "img.png",
      title: "뮤지컬 '영웅'",
      date: "12.21 ~ 02.28",
      category: "musical",
    },
    {
      img: "img.png",
      title: "뮤지컬 '영웅'",
      date: "12.21 ~ 02.28",
      category: "musical",
    },
    {
      img: "img.png",
      title: "뮤지컬 '영웅'",
      date: "12.21 ~ 02.28",
      category: "musical",
    },
    {
      img: "img.png",
      title: "데이터2 sport",
      date: "12.21 ~ 02.28",
      category: "sport",
    },
  ]

  const categoryFilter = () => {
    const filteringData = data.filter( data => data.category === category)
    setRenderingData(filteringData);
  }

  useEffect(() => categoryFilter(), [category]);

  return (
    <div>
      <Navbar/>
      <div className="pt-12 bg-pink-200">
        <div className="text-center text-orange-500 text-9xl font-bold mb-10">This Week</div>
        <div className="mt-10 text-center">{categories.map( (c, idx) => (<button className="text-1xl ml-6 font-bold text-blue-400 pressed:text-green-400 hover:text-green-400" key={idx} onClick={()=>{setCategory(c); console.log(c)}}>{c}</button>))}</div>
        <div className="bg-red-100 content mt-12 grid gap-4 grid-cols-5 grid-rows-2">
        {/* <img src={require("../public/zzz.png")}></img> */}
          {renderingData.map((data, idx) => (<div className="bg-blue-100 text-center"><div className='m-auto h-80 w-64 bg-gray-100'></div><div key={idx}>{data.title}<div>{data.date}</div></div></div>))}
        </div>
        <footer className="h-96"></footer>
      </div>
    </div>
  );
}
