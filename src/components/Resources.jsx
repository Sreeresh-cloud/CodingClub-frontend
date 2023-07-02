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
      <Carousel>
          {items.map((item, index) => (
            <div key={index} className="p-8 bg-black text-white">
              {item}
            </div>
          ))}
        </Carousel>
      <ResourceCard />
      <ResourceCard />
    </div>
  );
};

export default Resources;
