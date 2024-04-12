import React from 'react';
import NextImage from 'next/image';


export default function Choose() {
    return (
        <div className='bg-white text-black'>
            <h1 className='text-5xl text-center font-bold'>Why Choose Us?</h1>

            <div className='grid grid-cols-4 gap-4 text-2xl  font-bold  text-center mt-8'>
                <h2>Emergency assistance time of 15 minutes or less</h2>
                <h2>24/7 Support</h2>
                <h2> Biggest fleet of ambulances across India</h2>

            </div>
            <div className="flex justify-center items-center gap-8">
  <div className="w-1/3">
    <img
      src="https://images.unsplash.com/photo-1578842077399-b98b5897ada2?q=80&w=500&auto=format&fit=crop"
      alt="Ambulance 1"
      className="w-full rounded-lg"
    />
  </div>
  <div className="w-1/3">
    <img
      src="https://images.unsplash.com/photo-1578842077399-b98b5897ada2?q=80&w=500&auto=format&fit=crop"
      alt="Ambulance 2"
      className="w-full rounded-lg"
    />
  </div>
  <div className="w-1/3">
    <img
      src="https://images.unsplash.com/photo-1578842077399-b98b5897ada2?q=80&w=500&auto=format&fit=crop"
      alt="Ambulance 3"
      className="w-full rounded-lg"
    />
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pl-15">
  <div className="bg-pink-200 rounded-lg p-6 shadow-md pr-4 pt-4">
    {/* <img src="on-the-go-icon.png" alt="On the go convenience icon" class="w-12 h-12 mx-auto mb-4"> */}
    <h3 className="text-xl font-bold mb-2">On the go convenience</h3>
    <p className="text-gray-700">One touch access to medical emergency services.</p>
  </div>
  
  

  <div className="bg-pink-200 rounded-lg p-6 shadow-md">
    {/* <img src="easy-to-talk-icon.png" alt="Easy to Talk icon" class="w-12 h-12 mx-auto mb-4"> */}
    <h3 className="text-xl font-bold mb-2">Easy to Talk</h3>
    <p className="text-gray-700">Seamless communication with ambulance drivers.</p>
  </div>
  <div className="bg-pink-200 rounded-lg p-6 shadow-md">
    {/* <img src="easy-to-talk-icon.png" alt="Easy to Talk icon" class="w-12 h-12 mx-auto mb-4"> */}
    <h3 className="text-xl font-bold mb-2">Advance Booking</h3>
    <p className="text-gray-700">Book ambulances in advance for hassle-free hospital visits.</p>
  </div>
</div>







<div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
  <div className="space-y-3">
    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl md:tracking-tight">Our Services</h2>
    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl md:max-w-none lg:text-base xl:text-xl dark:text-gray-400">
      We offer a range of emergency medical services to provide immediate care and transport to those in need.
    </p>
  </div>
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
    <div className="grid gap-2">
      <h3 className="text-xl font-bold">Advanced Life Support</h3>
      <p className="text-gray-500 dark:text-gray-400">
        Our paramedics are equipped to provide advanced medical care on the scene and during transport.
      </p>
    </div>
    <div className="grid gap-2">
      <h3 className="text-xl font-bold">Mobile Intensive Care Unit</h3>
      <p className="text-gray-500 dark:text-gray-400">
        Our ambulances are equipped as mobile intensive care units, with the latest medical technology and equipment.
      </p>
    </div>
    <div className="grid gap-2">
      <h3 className="text-xl font-bold">Emergency Transport</h3>
      <p className="text-gray-500 dark:text-gray-400">
        We provide rapid emergency transport to hospitals and medical facilities for those in need of urgent care.
      </p>
    </div>
    <div className="grid gap-2">
      <h3 className="text-xl font-bold">Community First Aid</h3>
      <p className="text-gray-500 dark:text-gray-400">
        We offer training in first aid and CPR to the community to help save lives in emergency situations.
      </p>
    </div>
  </div>
</div>






        </div>
    );
}
