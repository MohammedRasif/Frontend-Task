import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
        <div>
           <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;