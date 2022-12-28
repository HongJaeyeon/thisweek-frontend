import '../App.css';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {

  const [data, setData] = useState();

  const fetchData = () => {
    fetch('http://52.79.246.204:4041/api/v1/data', {
      method: 'GET',
    }).then(res => res.json())
    .then(res => {
      setData(res.body.result);
    });
  };

  const categories = [
    ["Musical", "뮤지컬"],
    ["Concert", "콘서트"],
    ["Acting", "연극"],
    ["Classic", "클래식/무용"],
    ["Sport", "스포츠"],
    ["Leisure", "레저"],
    ["Exhibition", "전시/행사"],
]

  const [category, setCategory] = useState("뮤지컬");
  const [renderingData, setRenderingData] = useState();

  const categoryFilter = () => {
    const filteringData = data?.filter( data => data.genre === category)
    setRenderingData(filteringData);
  }
  useEffect(() => fetchData(), []);
  useEffect(() => categoryFilter(), [category]);

  return (
    <div>
      <Navbar/>
      <div className="pt-12 bg-pink-200">
        <div className="text-center text-orange-500 text-9xl font-bold mb-10">This Week</div>
        <div className="mt-10 text-center">{categories.map( (c, idx) => (<button className="text-2xl ml-6 font-bold text-blue-400 pressed:text-green-400 hover:text-green-400 mb-10" key={idx} onClick={()=>{setCategory(c[1])}}>{c[0]}</button>))}</div>
        <div className="content mt-12 grid gap-8 grid-cols-5 grid-rows-2">
          {renderingData?.map((data, idx) => (<div className="text-center"> <img className='m-auto h-80 w-64 rounded-lg text-center m-auto' src={`${data.picture}`}></img><div className="p-5 text-xl font-bold w-64 text-center m-auto">{data.title}</div><div>{data.period}</div></div>))}
        </div>
        <footer className="h-96"></footer>
      </div>
    </div>
  );
}
