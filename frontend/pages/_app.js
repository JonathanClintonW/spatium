import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <div className='p-4 bg-white dark:bg-black text-black dark:text-white min-h-screen w-screen tracking-wide select-none transition duration-500'>
                <Navbar />
                <Component {...pageProps} />
                {/* <Footer /> */}
            </div>
        </AuthProvider>
    );
};

export default MyApp;
