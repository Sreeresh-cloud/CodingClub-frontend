import ResourceCard from "./ResourceCard";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Resources = () => {
  const items = [
    'All',
    'Web Development',
    'AI/ML',
    'Cyber Security',
    'App Development'
    // Add more items as needed
  ];
  

  return (
    <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14 gap-4">
      <div className="flex sm:mt-7 mb-24">
        <div className="font-black text-4xl sm:text-6xl">RESOURCES</div>
        <div className="flex-auto border-b-4 mb-2 ml-2"></div>
      </div>
      <Carousel showStatus={false} className="mr-16 ml-16 md:mr-64 md:ml-64">
          {items.map((item, index) => (
            <div key={index} className="p-8 bg-black text-white ">
              {item}
            </div>
          ))}
        </Carousel>
            <div className="flex flex-col gap-4">
                <ResourceCard />
                <ResourceCard />
            </div>
    </div>
  );
};

export default Resources;
