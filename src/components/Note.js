import '../App.css';

export default function Note({title, content}){

  return(
    <div className='text-center rounded m-auto h-80 w-64 bg-yellow-100'>
      <div className='p-5 text-xl font-bold text-4'>{title}</div>
      <div className='text-left p-5 h-56'>{content}</div>
    </div>
  );
}