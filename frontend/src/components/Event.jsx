import React from 'react'
import { Link } from 'react-router-dom';


// swiper js import
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// imports data 
import Events from '../Data/EventData.js'; // data for event



const Event = () => {
    let featured = Events.filter((event) => event?.isfeatured == true);
    let allevents = Events.filter((event) => event?.isfeatured == false);
    return (


        <>
            <div className="min-h-[30vh] lg:min-h-[70vh] w-full flex flex-col gap-4 justify-center bg-slate-300 py-4 border-2 ">
                <h1 className='w-fit m-auto h-fit text-2xl font-bold text-comptech-950 uppercase border-s-4 bg-slate-400 px-5 border-comptech-950 pl-3'>Events</h1>
                {
                    featured ? <>
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            centeredSlides={true}
                            loop={true}
                            grabCursor={true}
                            pagination={{ clickable: true }}
                            className='w-10/12'
                        >
                            {
                                featured?.map((data, index) => {
                                    return (
                                        <SwiperSlide key={index} className=' flex items-center justify-center'>
                                            <div
                                                className="w-fit min-w-[300px] md:min-w-[600px] md:max-w-[600px] md:w-fit border-2 rounded-xl bg-gray-50 h-full"
                                            >
                                                <p className="bg-comptech-100 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
                                                    FEATURED
                                                </p>
                                                <div className="flex flex-col md:flex-row p-5 gap-2 w-fit h-full items-center">
                                                    {/* Profile Picture */}
                                                    <div>
                                                        <img
                                                            src={data.eventCover}
                                                            className="md:max-w-20 md:max-h-20  rounded-md w-28 h-28"
                                                        />
                                                    </div>
                                                    {/* Description */}
                                                    <div className="col-span-5 md:col-span-4 ml-4">
                                                        <p className="text-sky-500 font-bold text-xs">{data.event}</p>
                                                        <p className="text-gray-600 font-bold  select-text md:text-sm text-xs">
                                                            {data.eventDescription.length > 100 ? data.eventDescription.slice(0, 100) + "..." : data.eventDescription}
                                                        </p>
                                                        <p className="text-gray-400 md:text-sm text-xs"> {data.eventdate}</p>
                                                        <p className="text-gray-400 mt-2 md:text-sm text-xs">Venue : {data.venue}</p>
                                                        <p className="text-gray-500  select-text md:text-sm text-xs">Speaker : {data.speakername} </p>
                                                        <p className="text-gray-400  select-text md:text-sm text-xs"> {data.currentPost} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </> : null
                }


                {
                    allevents && allevents.length > 0 ?
                        <h1 className={`w-fit m-auto text-2xl font-bold text-comptech-950 uppercase border-s-4 bg-slate-400 px-5 border-comptech-950 pl-3 text-nowrap ${!featured ? "mt - 20" : ""}`}>Recent Events</h1>
                        : null
                }

                {
                    allevents && allevents.length > 0 ?
                        <Swiper
                            spaceBetween={30}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            className='w-[86vw] m-auto min-h-[10vh]  lg:min-h-[20vh] h-fit py-5 '
                        >
                            {
                                allevents?.map((data, index) => {
                                    return (
                                        <SwiperSlide key={index} className='w-fit bg-comptech-950 rounded-xl border-b-4 border-slate-600 hover:scale-95'><Link
                                            to={`/events/${data.event}`}
                                            className="w-fit"
                                        >
                                            <div className="flex flex-nowrap w-full m-auto p-5 gap-2 items-center">

                                                <div>
                                                    <img src={data.eventCover} alt="" className="w-16    md:w-20  bg-comptech-100 rounded-md text-comptech-950 object-contain" />
                                                </div>
                                                <div className="w-full  col-span-5">
                                                    <p className="text-comptech-100 font-bold text-xs">{data.EventCategory}</p>
                                                    <p className="text-slate-200 font-bold">{data.event.length > 20 ? data.event.slice(0, 26) + "..." : data.event}</p>
                                                    {data.collabs && <p className="text-gray-400 text-sm"><span className='text-gray-400 font-bold'>Collabs:</span>  {data.collabs} </p>}
                                                    <p className="text-gray-400 text-sm">Speaker : {data.speakername}</p>
                                                    <p className="text-red-500 text-xs">Held : {data.eventdate}</p>
                                                </div>
                                            </div>
                                        </Link></SwiperSlide>
                                    )
                                })
                            }



                        </Swiper> : null
                }


            </div ></>

    )
}

export default Event
