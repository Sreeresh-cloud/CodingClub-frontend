import EventPic from '../assets/Event Card.svg'
const EventCard = ({eventName,organizer,eventDate,venue}) => {
    return(
        <div className='border-2 border-[#DE3500] p-2 flex flex-col gap-2'>
            <img src={EventPic} className='object-center object-cover h-48 w-full'></img>
            <div className='text-xl font-black text-center'>{eventName}</div>
            <div className='text-sm font-extrabold'>{organizer}</div>
            <div className='font-montserrat'><span className='pi pi-calendar'></span><span className='font-black'> Event Date:</span> {eventDate}</div>
            <div className='font-montserrat'><span className='pi pi-map-marker'></span><span className='font-black'> Venue:</span> {venue}</div>
            <div className='flex justify-center'>
                <button type="button" className="text-white bg-[#DE3500] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Register Here</button>
            </div>
        </div>
    );
};

export default EventCard;