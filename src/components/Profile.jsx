import React from 'react';
import testDp from '../assets/images/img1.jpg';

const ProfilePage = () => {
  return (
    <div className="flex-auto p-4 sm:p-7 mb-7 sm:mb-20 sm:px-14 gap-4">
      <div className="flex sm:mt-4 mb-8 sm:mb-24">
        <div className="font-black text-2xl sm:text-6xl">PROFILE</div>
        <div className="flex-auto border-b-2 sm:border-b-4 mb-2 ml-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10">
        <div className="col-span-1 sm:col-span-1">
          <div className="relative w-48 h-48 sm:w-72 sm:h-72 max-h-[400px] mx-auto md:mx-0 ">
            <div className="absolute inset-2 sm:inset-3 bg-[#E5245A] md:transform md:translate-y-5"></div>
            <div className="absolute inset-0 md:transform md:translate-x-5">
              <img
                src={testDp}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-3 flex flex-col gap-4 md:gap-5">
          <div className="text-xl sm:text-4xl font-bold text-center sm:text-left">John Doe</div>
          <div className="text-lg sm:text-3xl text-center sm:text-left">sample@email.com</div>
          <div className="hidden sm:block w-full border-b-2 sm:border-b-4 mt-2 ml-2"></div>
          <div className="flex flex-col rounded-xl border border-[#E5245A]">
            <div className='mt-3 p-3 sm:p-5 font-bold text-xl sm:text-3xl text-center sm:text-left'>About</div>
            <div className='p-3 sm:p-5 flex flex-row text-lg sm:text-2xl'>
              <div className='flex-1'>Membership</div>
              <div>Active</div>
            </div>
            <div className='p-3 sm:p-5 flex flex-row text-lg sm:text-2xl'>
              <div className='flex-1'>Admission No</div>
              <div>123456</div>
            </div>              
            <div className='p-3 sm:p-5 flex flex-row text-lg sm:text-2xl'>
              <div className='flex-1'>Phone No</div>
              <div>999999999</div>
            </div>              
            <div className='p-3 sm:p-5 flex flex-row text-lg sm:text-2xl'>
              <div className='flex-1'>Branch</div>
              <div>Computer Science</div>
            </div>
            <div className='p-3 sm:p-5 flex flex-row text-lg sm:text-2xl'>
              <div className='flex-1'>Bio</div>
              <div></div>
            </div>
            <div className='p-3 sm:p-5 flex flex-row text-lg sm:text-2xl'>
              <div className='flex-1'>Year</div>
              <div></div>
            </div>
        </div>
        <div className="p-3 sm:p-5 flex justify-center md:justify-end items-center md:items-end">
              <button type="button" className="text-white w-[70%] sm:w-44 bg-[#E5245A] hover:bg-[#E5244A] focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2 text-center">Edit</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProfilePage;
