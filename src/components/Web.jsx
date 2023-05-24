import WebCard from "./WebCard";
const Team = () => {
    return(
        <div className="flex-auto p-7 mb-7 ml-2 sm:mb-20 sm:px-14">
            <div className="flex sm:mt-7 mb-24">
                <div className="font-black text-4xl sm:text-6xl ">WEB TEAM</div>
                <div className="flex-auto border-b-4 mb-2 ml-2"></div>
            </div>
            <div className="flex flex-col items-left gap-12 md:grid md:grid-cols-2 xl:grid-cols-3 xl:mr-2 md:gap-36  mr-2">
                <WebCard />
                <WebCard />
                <WebCard />
                
            </div>
        </div>
    );
};

export default Team;