import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <ul className='flex justify-between gap-4 bg-white px-4 py-2 rounded-md font-bold uppercase'>
        <li><Link href="/">Spatium</Link></li>
        <li><Link href="/collection">Collection</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        {user ? (
          <>
            <li><Link href="/profile">Profile</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link href="/login">Sign In</Link></li>
            <li><Link href="/register">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
