import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
  <div className="nav sticky top-0 h-9 bg-red-200">
    <Link to="/" className="text-2xl ml-5 text-red-400">Home</Link>
    <Link to="/community" className="text-2xl ml-5 text-red-400">Community</Link>
  </div>
  )
}
