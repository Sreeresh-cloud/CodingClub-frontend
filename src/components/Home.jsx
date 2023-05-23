import Logo from '../assets/coding club dp copy 2.svg'
import '../styles/home.css'
import AboutUsPic from '../assets/Code typing-bro (1) 1.svg'
import VisionPic from '../assets/To the stars-rafiki (1).svg'
import AboutUsPic2 from '../assets/Code typing-bro.svg'
import VisionPic2 from '../assets/To the stars-rafiki(2).svg'

const Home = () => {
    return(
        <div className="flex-auto">
            <div className="flex flex-col justify-center items-center h-screen pb-44 sm:pb-32">
                <div className='relative'>
                    <div className='absolute top-1/4 left-1/2 translate-x-[-50%] w-max text-4xl sm:text-6xl'>Welcome to</div>
                    <img src={Logo} alt='logo' className='h-80 sm:h-[70vh]'></img>
                </div>
            </div>
            <div className='relative hidden sm:block'>
                <img src={AboutUsPic} className='absolute right-0 z-10 h-[55%] hidden xl:block'></img>
                <div className='about-us h-[120vh] bg-gradient-to-r from-white to-slate-300 text-black relative'>
                    <div className='absolute top-32 min-[1000px]:max-xl:top-60 left-9 w-[65%] xl:w-[35%]'>
                        <div className='text-4xl sm:text-5xl font-black'><span className='text-[#112EAF]'>{'<'}</span>About Us<span className='text-[#112EAF]'>{'>'}</span></div>
                        <p className='font-montserrat text-xl 2xl:text-2xl mt-7'><span className='text-[#112EAF] font-bold'>Coding club TKMCE</span> is an initiative to inculcate the culture of programming and development in our institute. We create a platform which allows students to gain assistance and mentorship to enhance their coding ability. We ensure that every student here at TKMCE should have an opportunity to learn how to code and develop a passion for it. Our aim is to impart and instill this culture of learning-by-practice among students and professionals alike, and to that end, our team organizes a multitude of events throughout the year.</p>
                    </div>
                </div>
                <div className='h-screen'></div>
                <img src={VisionPic} className='absolute bottom-[14%] left-0 h-[35%] hidden xl:block'></img>
                <div className='absolute w-[35%] left-[5%] xl:left-[35%] bottom-[35%]'>
                    <div className='text-5xl font-black'>Vision<span className='text-[#E5245A]'>{'>'}</span></div>
                    <p className='font-montserrat text-xl 2xl:text-2xl mt-7'>To inculcate the culture of programming and development among students and to enhance their coding ability.</p>
                </div>
                <div className='absolute w-[35%] text-right right-[10%] min-[840px]:right-[5%] bottom-[16%]'>
                    <div className='text-5xl font-black'><span className='text-[#E5245A]'>{'<'}</span>Mission</div>
                    <p className='font-montserrat text-xl 2xl:text-2xl mt-7'>To create a platform to impart and instil this culture of learning-by-practice among students and professionals alike, and to that end, our team organizes a multitude of events throughout the year.</p>
                </div>
            </div>
            <div className='sm:hidden'>
                <div className='bg-white text-black min-h-screen flex flex-col justify-center items-center px-7 pt-7 pb-14'>
                    <img src={AboutUsPic2} className='h-64'></img>
                    <div className='text-4xl font-black mb-7'><span className='text-[#112EAF]'>{'<'}</span>About Us<span className='text-[#112EAF]'>{'>'}</span></div>
                    <p className='font-montserrat'><span className='text-[#112EAF] font-bold'>Coding club TKMCE</span> is an initiative to inculcate the culture of programming and development in our institute. We create a platform which allows students to gain assistance and mentorship to enhance their coding ability. We ensure that every student here at TKMCE should have an opportunity to learn how to code and develop a passion for it. Our aim is to impart and instill this culture of learning-by-practice among students and professionals alike, and to that end, our team organizes a multitude of events throughout the year.</p>
                </div>
                <div className='min-h-screen flex flex-col justify-center items-center text-center px-7 py-24 pb-32'>
                    <div className='text-4xl font-black mb-7'><span className='text-[#E5245A]'>{'<'}</span>Vision<span className='text-[#E5245A]'>{'>'}</span></div>
                    <p className='font-montserrat'>To inculcate the culture of programming and development among students and to enhance their coding ability.</p>
                    <img src={VisionPic2} className='h-64'></img>
                    <div className='text-4xl font-black mb-7'><span className='text-[#E5245A]'>{'<'}</span>Mission<span className='text-[#E5245A]'>{'>'}</span></div>
                    <p className='font-montserrat'>To create a platform to impart and instil this culture of learning-by-practice among students and professionals alike, and to that end, our team organizes a multitude of events throughout the year.</p>
                </div>
            </div>
            <div className='text-[0.6rem] px-7 text-center'>Illustrations by <a className='hover:underline underline-offset-4' href="https://storyset.com/" target='_blank'>Storyset</a></div>
        </div>
    );
};

export default Home;