
// import EventPic from '../assets/Event Card.svg'
const image = "https://s3-alpha-sig.figma.com/img/d9bb/4379/f6c049fdf3ce57adc80f50d7a5100f3d?Expires=1685923200&Signature=LpSfNNcMSmj3CxAoyE13hVUuAe0euZ1BUyD8qbDhEVej-1fQW3Uf~Wl08pWH3wTzGQC60vWf8YiQvtd3~W2sHtnKRTzg13jabX3iqW56CSgWAcMRuHlSUw407uXMt1Vryvcfp-MLheNUM0TQcsT-gnW76IbmoKn3hsIJaKlKM9S2sQsObWIjsYU7W0xUy2sA3a5bibyNGL2q-8mXZHDGQjcUt9dikIsQS4Oq~62nQC7x7zmFYOBGZaUOvzh9i4JsZZDQEwajCpRJ59yMsAz1r1p~pa-ElqIYiJYYtfhTg-U6qNvpSl77eT7rYTgK0jSrvdkN~fMf9s~YiJu3XUiE4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
const WebCard = () => {
    return(
        <div className="p-0 flex flex-col gap-2">
            <div className="flex flex-row">
                <img
                src={image}
                className="relative object-center object-cover h-64 w-full rounded-t-md clip-polygon"
                style={{ zIndex: 1 }}
                alt="Image"
                />
                <div
                className="bg-[#E12358] box-border h-20 w-10 ml-auto w-20 clip-polygon"
                style={{ zIndex: 2, clipPath: "polygon(100% 39%, 0% 100%, 100% 100%)", marginLeft: "-80px", marginTop: "176px" }}></div>
                <div className='justify-center items-center pi pi-github  mt-5 'style={{zIndex:"3",marginLeft:"-25px",marginTop: "232px"}}></div>
            </div>
            <div className=" absolute w-3 h-3 rounded-full z-10 ml-2 mt-2 bg-[#112EAF] " ></div>
            <div className=" absolute w-3 h-3 rounded-full z-10 ml-8 mt-2 bg-[#E12358] sm:ml-8" ></div>
            <div className='flex flex-row p-4 border-2 rounded-md border-[#112EAF] relative' style={{ marginTop: "-20px", zIndex: "0" }}>
                <div className='flex flex-col'>
                    <div className='xl:text-xl font-black text-left sm:text-md'>John Doe</div>
                    <div className='xl:text-sm font-extrabold sm:text-sm'>Web Lead</div>
                </div>
                <div className="relative flex justify-right items-right ml-auto">
                <div className="flex justify-center items-center bg-[#112EAF] box-border h-30 w-20 ml-auto rounded-r-sm sm:w-20 " style={{marginTop:"-10px",marginBottom:"-16px", marginRight:"-17px",zindex : "0"}}></div>
                <div className='absolute justify-center items-center pi pi-linkedin ml-8 mt-5'></div>
            </div>
            </div>

        </div>
    );
};

export default WebCard;

// {/* <button type="button" className="text-white bg-[#DE3500] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Register Here</button> */}