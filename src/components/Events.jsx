import EventCard from "./EventCard";
import { useEffect, useState } from "react";
import axios from 'axios';


const Events = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend.codingclubtkmce.tech/api/events/all/', {
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:5173'
            }
          })
        const data = response.data;
        setData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    return(
        <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14">
            <div className="flex sm:mt-7 mb-24">
                <div className="font-black text-4xl sm:text-6xl">EVENTS</div>
                <div className="flex-auto border-b-4 mb-2 ml-2"></div>
            </div>
            <div className="flex flex-col items-center gap-24 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-36 sm:px-10">
                    {data.map(event => (
                    <EventCard
                        key={event.id}
                        eventName={event.title}
                        organizer={event.coordinator_1}
                        eventDate={event.event_start}
                        venue={event.venue}
                    />
                    ))}
            </div>
        </div>
    );
};

export default Events;