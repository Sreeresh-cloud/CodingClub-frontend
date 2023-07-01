import ResourceCard from "./ResourceCard";
import { Menubar } from 'primereact/menubar';

const Resources = () => {
    const items = [
        {
          label: 'All',
          command: () => {
          }
        },
        {
          label: 'Web Development',
          command: () => {
          }
        },
        {
          label: 'ML/AI',
          command: () => {
          }
        },
        {
          label: 'CyberSecurity',
          command: () => {
          }
        },
        {
            label: 'App Development',
            command: () => {
            }
          }
      ];


  return (
    <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14 gap-4">
      <div className="flex sm:mt-7 mb-24">
        <div className="font-black text-4xl sm:text-6xl">RESOURCES</div>
        <div className="flex-auto border-b-4 mb-2 ml-2"></div>
      </div>
      <Menubar
        model={items}
        className="bg-black flex justify-center border-none text-white"
      />
      <ResourceCard />
    </div>
  );
};

export default Resources;
