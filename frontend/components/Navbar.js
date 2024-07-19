import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import DarkModeToggle from '../context/DarkModeToggle';
const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <ul className='flex justify-between gap-4 text-black bg-white px-4 py-2 rounded-md font-bold uppercase'>
        <li><Link href="/">Spatium</Link></li>
        <li><Link href="/collection">Collection</Link></li>
        <div className='flex gap-4'>
          {user ? (
            <div className='flex gap-4'>
              <li><Link href="/cart">Cart</Link></li>
              <li><Link href="/profile">Profile</Link></li>
              <li><button onClick={logout}>Logout</button></li>
            </div>
          ) : (
            <div className='flex gap-4'>
              <li><Link href="/login">Sign In</Link></li>
              <li><Link href="/register">Sign Up</Link></li>
            </div>
          )}
          <li><DarkModeToggle /></li>
        </div>

      </ul>
      <ul>

      </ul>
    </nav>
  );
};

export default Navbar;
