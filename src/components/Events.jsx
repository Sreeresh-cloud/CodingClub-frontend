import EventCard from "./EventCard";

const Events = () => {
    return(
        <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14">
            <div className="flex sm:mt-7 mb-24">
                <div className="font-black text-4xl sm:text-6xl">EVENTS</div>
                <div className="flex-auto border-b-4 mb-2 ml-2"></div>
            </div>
            <div className="flex flex-col items-center gap-24 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-36 sm:px-10">
                  <EventCard/>
                  <EventCard/>
                  <EventCard/>
            </div>
        </div>
    );
};

export default Events;