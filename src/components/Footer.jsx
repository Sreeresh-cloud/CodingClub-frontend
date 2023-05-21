import Logo from '../assets/coding club dp copy 2.svg'

const Footer = () => {

    return(
        <div className="flex gap-60 font-source bg-black h-64 w-screen text-xl overflow-hidden">
            <img src={Logo} alt="Logo" className="ml-20 h-full transition-transform duration-300 transform-gpu hover:scale-110" />
            <div className="grid gap-3  mt-4 w-5 h-5">
                <a href="#" className="block text-white hover:text-gray-500 hover:opacity-50 hover:translate-x-2">Home</a>
                <a href="#" className="block text-white hover:text-gray-500 hover:opacity-50 hover:translate-x-2">Events</a>
                <a href="#" className="block text-white hover:text-gray-500 hover:opacity-50 hover:translate-x-2">Team</a>
                <a href="#" className="block text-white hover:text-gray-500 hover:opacity-50 hover:translate-x-2">Resources</a>
            </div>
            <div className="grid gap-2 mt-3 w-30 h-5 ">
                <a href="#" className="block text-white hover:text-gray-500 hover:opacity-50 hover:translate-x-2">Terms and Conditions</a>
                <a href="#" className="block text-white pb-40 hover:text-gray-500 hover:opacity-50 hover:translate-x-2">Privacy Policy</a>
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white hover:bg-black">
                <p className='text-xs py-1 text-center hover:text-gray-500'>Coding Club TKMCE - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;