import WebCard from "./WebCard";
const Team = () => {
    return(
        <div className="flex-auto p-7 mb-7  sm:mb-20 sm:px-14">
            <div className="flex sm:mt-7 mb-24">
                <div className="font-black text-4xl sm:text-6xl ">WEB TEAM</div>
                <div className="flex-auto border-b-4 mb-2 ml-2"></div>
            </div>
            <div className="flex justify-center">
                <div class ="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full md:w-[80%] xl:w-[85%] 2xl:w-3/4 md:gap-y-16">
                <WebCard />
                <WebCard />
                <WebCard />
                <WebCard />
                </div>
            </div>
        </div>
    );
};

export default Team;