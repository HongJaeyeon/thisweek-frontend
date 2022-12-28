import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import Join from './pages/Join';
import Login from './pages/Login';

export default function Router(){
  return(      
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/community" element={<Community />}/>
      <Route path="/join" element={<Join />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  );
}
