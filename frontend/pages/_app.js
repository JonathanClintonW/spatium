import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <div className='p-4 bg-black min-h-screen tracking-wide'>
                <Navbar />
                {/* <Component {...pageProps} /> */}
                {/* <Footer /> */}
            </div>
        </AuthProvider>
    );
};

export default MyApp;
