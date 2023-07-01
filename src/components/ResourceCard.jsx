import ResourceImage from "../assets/images/jsresource.png";
import "../styles/resourcecard.css";

const ResourceCard = () => {
  return (
    <div className="border-2 border-[#E5245A] rounded-md mt-4 mb-4">
      <div className="border-8 border-black md:mb-2 md:mt-2 flex flex-col md:flex-row">
        <div className="md:w-1/2 md:ml-2">
          <div className="bg-cover bg-center h-48 md:h-auto">
            <img src={ResourceImage} alt="Resource" />
          </div>
        </div>
        <div className="relative bg-[#E5245A] text-white md:w-1/8 md:px-24 md:py-6 md:mr-2 rounded-md group">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">JavaScript Learning Pack</h1>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Coding Club TKMCE</h2>
          <p className="text-sm md:text-xl mb-4">
            An extensive collection of the best JavaScript Learning Materials for you to start your JS Journey.
          </p>
          <div className="hidden md:block absolute text-xs md:text-sm left-0 bottom-10 md:left-20 md:bottom-4 bg-[#112EAF] px-2 py-1 rounded-2xl hover:bg-black transition-colors">
            Web Development
          </div>
          <div className="card-icon absolute h-1/3 w-1/3 bg-black bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="relative h-full w-full">
              <span className="absolute pi pi-arrow-down-right bottom-2 right-2 text-4xl hover:text-[#112EAF] transition-all duration-300 ease-out"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
