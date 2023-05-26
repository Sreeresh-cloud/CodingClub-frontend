import ExecomPic from '../assets/placeholder-image-execom.svg'
import '../styles/execomcard.css'

const ExecomCard = () => {

    return(
        <div className='w-52 flex flex-col'>
            <div className='card-image w-full h-56 relative overflow-hidden'>
                <img src={ExecomPic} className='object-cover object-center w-full h-full'></img>
                <div className='card-icon absolute h-[35%] w-[35%] bg-[#E5245A] bottom-[-35%] right-0'>
                    <div className='relative h-full w-full'>
                        <span className='absolute pi pi-linkedin bottom-2 right-3 text-xl hover:text-blue-950 transition-all duration-300 ease-out'></span>
                    </div>
                </div>
            </div>
            <div className='text-center px-2 mt-3'>
                <div className='text-xl font-black'>PROF. SHAMEEM ANSAR A</div>
                <div className='mt-2'>FACULTY COORDINATOR</div>
            </div>
        </div>
    );
};

export default ExecomCard;