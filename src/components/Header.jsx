import { Link } from "react-router-dom";
import Logo from '../assets/coding club dp copy 2.svg'

const Header = ({setVisible}) => {

    return(
        <div className="flex h-20 xl:h-28 items-center px-6 xl:px-14">
            <img src={Logo} className="h-full mr-auto" alt="logo"></img>
            <button className="sm:hidden" onClick={()=> setVisible(true)}><span className="pi pi-bars"></span></button>
            <div className="hidden sm:flex sm:gap-11">
                <Link to='/' className="hover:underline underline-offset-4">Home</Link>
                <Link to='/events' className="hover:underline underline-offset-4">Events</Link>
                <Link to='/eventdetails' className="hover:underline underline-offset-4">Event Details</Link>
                <Link to='/web' className="hover:underline underline-offset-4">Team</Link>
            </div>
        </div>
    );
};

export default Header;