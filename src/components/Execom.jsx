import { useState } from "react";
import ExecomCard from "./ExecomCard";
import Asher from '../assets/images/img1.jpg'
import Muhammad from '../assets/images/img2.jpg'
import Angath from '../assets/images/img4.jpg'
import Almira from '../assets/images/img5.jpg'
import Adithyan from '../assets/images/img6.jpg'
import Akshay from '../assets/images/img7.jpg'
import Anand from '../assets/images/img8.jpg'
import Sreehari from '../assets/images/img9.jpg'
import Placeholder from '../assets/placeholder-image-execom.svg'
import { Carousel } from 'primereact/carousel';
        
const Execom = () => {

    const [imgList,setImgList] = useState(
        [
            {
                id:0,
                name:'Prof. Shameem Ansar A',
                role:'Faculty Coordinator',
                image:Placeholder
            },
            {
                id:1,
                name:'Almira Asif Khan',
                role:'Student Coordinator',
                image:Almira
            },
            {
                id:2,
                name:'Rahul Jose',
                role:'Student Coordinator',
                image:Placeholder
            },
            {
                id:3,
                name:'Shana Sherin M',
                role:'Design Lead',
                image:Placeholder
            },
            {
                id:4,
                name:'Angath J R',
                role:'Outreach Lead',
                image:Angath
            },
            {
                id:5,
                name:'Akshay E',
                role:'Documentation Lead',
                image:Akshay
            },
            {
                id:6,
                name:'Adithyan S',
                role:'Finance Lead',
                image:Adithyan
            },
            {
                id:7,
                name:'Asher Mathews Shaji',
                role:'Tech Lead',
                image:Asher
            },
            {
                id:8,
                name:'Sreehari Rajan',
                role:'Tech Lead',
                image:Sreehari
            },
            {
                id:9,
                name:'Muhammed',
                role:'Program Lead',
                image:Muhammad
            },
            {
                id:10,
                name:'Anand S',
                role:'Program Lead',
                image:Anand
            },
        ]
    );
    //additions
    //************* 
    const [items,setItems] = useState([
        {
            id:0,
            title:2022
        },
        {
            id:1,
            title:2023
        },
        {
            id:2,
            title:2024
        },
        {
            id:3,
            title:2025
        },
        {
            id:4,
            title:2026
        }
    ]);

    const [currentYear,setCurrentYear] = useState(2022);

    const responsiveOptions = [
        {
          breakpoint: '640px',
          numVisible: 2,
          numScroll:1,
        },
    ];

    const itemTemplate = (item) => {
        return(
          <div onClick={()=> setCurrentYear(item.title)}>
            {item.title}
          </div>
        );
    }
    //additions till here
    const renderedCards = imgList.map(item => (
        <ExecomCard key={item.id} item={item}/>
    ));

    return(
        <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14">
            <div className="flex sm:mt-7 mb-24">
                <div className="font-black text-4xl sm:text-6xl">EXECOM</div>
                <div className="flex-auto border-b-4 mb-2 ml-2"></div>
            </div>
            //additions
            <Carousel value={items} numScroll={1} numVisible={5} responsiveOptions={responsiveOptions} itemTemplate={itemTemplate}/>
            <div>
                Current year: {currentYear}
            </div>
            //additions
            <div className="flex justify-center">
                <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full md:w-[85%] xl:w-[90%] 2xl:w-3/4 md:gap-y-16">
                    {renderedCards}
                </div>
            </div>
        </div>
    );
};

export default Execom;