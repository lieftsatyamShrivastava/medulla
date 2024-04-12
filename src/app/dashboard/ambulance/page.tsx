"use client"
import React from 'react'
import Dialog from './dialog';

export default function ambulance() {
    return (
        <div className='bg-blue-200'>
            <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-pink-100">
                <div>
                    <h1 className=' text-center italic text-7xl bg-white  text-black font-bold'> Ambulance Near By you </h1>
                </div>
                <div className="gap-4 sm:gap-6 flex flex-row flex-wrap items-center justify-start bg-pink-100">
                    {[...Array(10)].map((_, index) => (
                        <button key={index} className="flex flex-col items-start justify-start gap-4 border border-slate-700 bg-slate-800 rounded-xl p-6 m-2 h-fit w-fit" onClick={() => document.getElementById('my_modal_1').showModal()}>
                            <BusIcon className="w-12 h-12" />
                            <div className="grid gap-1">
                                <h1 className="text-2xl font-bold">Ambulance {index + 1}</h1>
                                <p className="text-base text-gray-500 dark:text-gray-400">Contact: 9958777659</p>
                                <p className="text-base text-gray-500 dark:text-gray-400">Status : Runing</p>
                                <p className="text-base text-gray-500 dark:text-gray-400">Location: Delhi</p>
                            </div>
                        </button>
                    ))}
                </div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello </h3>
                        <p className="py-4"> We are coming dont worry </p>
                        <div className="modal-action">
                            <form method="dialog">
                                
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </main>
        </div>
    );
}

function BusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 6v6" />
            <path d="M15 6v6" />
            <path d="M2 12h19.6" />
            <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
            <circle cx="7" cy="18" r="2" />
            <path d="M9 18h5" />
            <circle cx="16" cy="18" r="2" />
        </svg>
    );
}
