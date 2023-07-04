import "../styles/contacts.css";

const Contacts = () => {
    
    return ( 
    <div className='bg-black px-7 pb-7 '>
        <div className="flex-auto px-0 py-7 mb-7  sm:mb-0 sm:px-5">
            <div className="flex sm:mt-7 mb-0">
                <div className="font-black text-4xl sm:text-6xl ">CONTACTS</div>
                <div className="flex-auto border-b-4 mb-2 ml-2"></div>
            </div>
           </div> 
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-0.5 gap-3 text-center mt-12 mb-10 ms-6 me-6">
            <div className="bg-[#112EAF] rounded-xl col-start-1 row-start-1 col-span-2 row-span-2">
                <h1 className='text-3xl pt-3 font-bold font-source'>Address</h1>
                <p className='pt-1 font-montserrat mb-2 md:mb-0'>TKM College Of Engineering,<br/>Karikode,<br/>Kollam,Kerala</p>
            </div>
            
            <div className="mail bg-[#E5245A] rounded-xl pt-6 col-start-1 row-start-3 col-span-1 row-span-2">
                <div className="mb-7">
                    <h3 className='text-xl md:text-2xl pt-3 font-bold'>Email</h3>
                    <p className='box1 text-xs md:text-lg pt-1 font-montserrat'>codingclub@tkmce.ac.in</p>
                </div>
            </div>
            <div className="phno  bg-[#E5245A] rounded-xl pt-6 col-start-2 row-start-3 col-span-1 row-span-2">
              <h3 className='text-xl md:text-2xl pt-2ns font-bold'>Phone Number</h3>
              <p className='text-xs md:text-lg pt-1 font-montserrat'>+91 9061152964</p>
            </div>
            <div className="social bg-[#112EAF] rounded-xl col-start-1 row-start-5 col-span-2 row-span-1">
            <a href='https://instagram.com/codingclub_tkmce'><i className="pi pi-instagram p-5 hover:text-blue-950 transition-all duration-300 ease-out" style={{ fontSize: '1.5em' }}></i></a>
            <a href='https://twitter.com/Codingclubtkmce'><i className="pi pi-twitter p-5 hover:text-blue-950 transition-all duration-300 ease-out" style={{ fontSize: '1.5em' }}></i></a>
            <a href='https://www.linkedin.com/company/codingclub-tkmce/'><i className="pi pi-linkedin  p-5 hover:text-blue-950 transition-all duration-300 ease-out" style={{ fontSize: '1.5em' }}></i></a>
            </div>
             <div className="Map  hidden md:block pr-2.5 col-start-3 row-start-1 col-span-2 row-span-5">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.6269990306782!2d76.63195209999999!3d8.9142251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd3036020df5%3A0xc3c1007e5232dc27!2sTKM%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1688287723111!5m2!1sen!2sin" className='rounded-xl h-full w-full'
              height="375" 
             style={{border:"0" }}
             allowfullscreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">
  
             </iframe>
            </div>  
        </div>
        </div>);
    
  };
  
  export default Contacts;