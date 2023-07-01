import ResourceImage from "../assets/images/jsresource.png";
import "../styles/resourcecard.css";
const ResourceCard = () =>
{
    return (
        <div className="border-2 border-[#E5245A] h-auto rounded-md">
            <div className="border-8 border-black flex gap-0 mb-2 mt-2">
                <div className="w-1/2 ml-2">
                    <div className="bg-cover bg-center">
                        <img src={ResourceImage} alt="Resource" />
                    </div>
                </div>
                <div className="group relative w-1/8 bg-[#E5245A] text-white px-24 py-4 mr-2 rounded-md ">
                    <h1 className="text-4xl font-bold">JavaScript Learning Pack</h1>
                    <h2 className="text-2xl font-bold">Coding Club TKMCE</h2>
                    <br/>
                    <p className="text-xl">
                        An extensive collection of the best JavaScript Learning Materials for you to start your JS Journey.
                    </p>
                    <div className="absolute text-md left-18 bottom-4 bg-[#112EAF] px-2 rounded-2xl hover:bg-black transition-colors">
                        Web Development
                    </div>
                    <div className='card-icon absolute h-[35%] w-[35%] bg-[black] bottom-[-35%] right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='relative h-full w-full'>
                        <span className='absolute pi pi-arrow-down-right bottom-5
                        
                         right-7 text-5xl hover:text-[#112EAF]  transition-all duration-300 ease-out'></span>
                    </div>
                </div>
                </div>  
            </div>
        </div>


    );
};

export default ResourceCard