import { useEffect, useState } from "react";
import ExecomCard from "./ExecomCard";
import Asher from "../assets/images/img1.jpg";
import Muhammad from "../assets/images/img2.jpg";
import Angath from "../assets/images/img4.jpg";
import Almira from "../assets/images/img5.jpg";
import Adithyan from "../assets/images/img6.jpg";
import Akshay from "../assets/images/img7.jpg";
import Anand from "../assets/images/img8.jpg";
import Sreehari from "../assets/images/img9.jpg";
import Placeholder from "../assets/placeholder-image-execom.svg";
import { Carousel } from "primereact/carousel";
import "../styles/execom.css";
import axios from "axios";

const Execom = () => {
  const [currentYear, setCurrentYear] = useState(2022);
  const [year, setYear] = useState(2023);

  useEffect(() => {
    excomehandler();
  }, [year]);

  async function excomehandler() {
    try {
      await axios
        .get("https://backend.codingclubtkmce.tech/api/execom/" + year)
        .then((res) => setImgList(res.team));
    } catch (err) {
      console.log(err);
    }
  }

  const [imgList, setImgList] = useState([]);
  const [items, setItems] = useState([
    {
      id: 0,
      title: 2022,
    },
    {
      id: 1,
      title: 2023,
    },
    {
      id: 2,
      title: 2024,
    },
    {
      id: 3,
      title: 2025,
    },
    {
      id: 4,
      title: 2026,
    },
  ]);

  const responsiveOptions = [
    {
      breakpoint: "640px",
      numVisible: 2,
      numScroll: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <div
        className={`flex justify-center hover:text-[#E5245A] hover:cursor-pointer text-xl md:text-2xl font-bold underline-offset-8 decoration-4 ${
          item.title === currentYear ? "underline text-[#E5245A]" : ""
        }`}
        onClick={() => setCurrentYear(item.title)}
      >
        {item.title}
      </div>
    );
  };
  const renderedCards = imgList.map((item) => (
    <ExecomCard key={item.id} item={item} />
  ));

  return (
    <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14">
      <div className="flex sm:mt-7 mb-24">
        <div className="font-black text-4xl sm:text-6xl">EXECOM</div>
        <div className="flex-auto border-b-4 mb-2 ml-2"></div>
      </div>
      <div className="flex justify-center">
        {/* <Carousel
          value={items}
          numScroll={1}
          numVisible={5}
          responsiveOptions={responsiveOptions}
          itemTemplate={itemTemplate}
          className="w-full xl:w-[70%]"
        /> */}
        {items.map((item) => {
          return (
            <button
              key={item.id}
              className="mx-3 underline "
              onClick={() => setYear(item.title)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      {/* <div className="mb-16">Current year: {currentYear}</div> */}
      <div className="flex justify-center">
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full md:w-[85%] xl:w-[90%] 2xl:w-3/4 md:gap-y-16">
          {renderedCards}
        </div>
      </div>
    </div>
  );
};

export default Execom;
