import EventPic from '../assets/images/img9.jpg'

const WebCard = () => {
    return(
        <div className="w-52 flex flex-col">
            <div className="card-image w-full h-56 relative overflow-hidden">
                <div className=" absolute w-3 h-3 rounded-full z-10 ml-2 mt-2 bg-[#112EAF] z-20 " ></div>
                <div className=" absolute w-3 h-3 rounded-full z-10 ml-8 mt-2 bg-[#E12358] sm:ml-8 z-20" ></div>
                <img src={EventPic} className="absolute object-cover object-center h-full w-full rounded-t-md z-10" alt="Image"/>
            </div>
            <div className='flex flex-row p-4 border-2 rounded-md border-[#112EAF] relative z-0 -mt-6'>
                <div className='-ml-2'>
                    <div className='xl:text-xl font-black text-left sm:text-md mt-3'>John Doe</div>
                    <div className='xl:text-sm font-extrabold sm:text-sm '>Web Lead</div>
                </div>
                <div className="relative flex flex-wrap ml-auto hover:text-blue-950 ">
                    <div className="flex justify-center items-center w-16 bg-[#112EAF] box-border h-30 ml-auto rounded-r-sm sm:w-16 z-0 -mx-4 -mb-4" ></div>
                    <div className="absolute justify-items-center pi pi-linkedin h-[35%] w-[35%] ml-[55%] mt-[65%]"></div>
                </div>
            </div>
        </div>
    );
};

export default WebCard;

// {/* <button type="button" className="text-white bg-[#DE3500] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Register Here</button> */}
 {/* <div
                className="bg-[#E12358] box-border h-20 w-10 ml-auto w-20 clip-polygon"
                style={{ zIndex: 2, clipPath: "polygon(100% 39%, 0% 100%, 100% 100%)", marginLeft: "-80px", marginTop: "176px" }}></div> */}
                {/* <div className='justify-center items-center pi pi-github  mt-5 'style={{zIndex:"3",marginLeft:"-25px",marginTop: "232px"}}></div> */}