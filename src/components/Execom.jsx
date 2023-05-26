import ExecomCard from "./ExecomCard";

const Execom = () => {

    return(
        <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14">
            <div className="flex sm:mt-7 mb-24">
                <div className="font-black text-4xl sm:text-6xl">EXECOM</div>
                <div className="flex-auto border-b-4 mb-2 ml-2"></div>
            </div>
            <ExecomCard/>
        </div>
    );
};

export default Execom;