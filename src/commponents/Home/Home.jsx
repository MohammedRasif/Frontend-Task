import Banner from "../Pages/Banner";
import CustomersSay from "../Pages/CustomersSay";
import Exceptional from "../Pages/Exceptional";
import PopularFoot from "../Pages/PopularFoot";
import TableBooking from "../Pages/TableBooking";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Exceptional></Exceptional>
            <PopularFoot></PopularFoot>
            <TableBooking></TableBooking>
            <CustomersSay></CustomersSay>
        </div>
    );
};

export default Home;