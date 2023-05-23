import EventImage from '../assets/Event Card.svg'

const EventDescription = () => {
    return(
        <div className='flex-auto p-7 sm:px-32 flex flex-col gap-3 sm:gap-7 mb-14'>
            <div className='flex justify-center'><img src={EventImage} className='object-cover object-center w-full h-56 sm:h-[34rem]'></img></div>
            <div className='text-2xl sm:text-4xl text-center font-black'>Computer Basics Workshop</div>
            <div>by Jon Doe</div>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-24'>
                <div className='font-montserrat'><span className='pi pi-calendar text-[#F4002C]'></span><span className='font-black text-[#F4002C]'> Event Date:</span> 21-05-2023</div>
                <div className='font-montserrat'><span className='font-black text-[#F4002C]'>Mode:</span> Offline</div>
                <div className='font-montserrat'><span className='pi pi-map-marker text-[#F4002C]'></span><span className='font-black text-[#F4002C]'> Venue:</span> TKM College of Engineering</div>
            </div>
            <div className='font-montserrat flex flex-col gap-7 sm:flex-row sm:my-14 min-[840px]:gap-48'>
                <div className='text-center sm:text-left sm:w-1/2'>
                    <div className='text-xl sm:text-2xl font-black my-4 sm:my-0'>About the Event</div>
                    <div className='text-sm sm:text-base'>The computer basics workshop was designed to provide participants with a comprehensive understanding of the fundamental principles of using a computer. The workshop began with an overview of the operating system and its interface, which covered the essential components of a computer such as the CPU, keyboard, and mouse. Participants were introduced to basic file management and storage concepts</div>
                </div>
                <div className='text-center flex flex-col gap-3 items-center'>
                    <div><span className='text-[#F4002C]'>Registration Fees:</span> Free</div>
                    <button type="button" className="text-white w-[70%] sm:w-44 bg-[#DE3500] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Register Here</button>
                    <div><span className='pi pi-phone'></span> POC:</div>
                </div>
            </div>
        </div>
    );
};

export default EventDescription;