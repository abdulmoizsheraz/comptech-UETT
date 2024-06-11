import { useParams } from 'react-router-dom';
import TimeLineOne from '../components/TimeLineOne';

// data 
import Events from '../Data/EventData.js'; // data for Event



// swiper imports 

// swiper js import
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';


const EventsPage = () => {
    let { event } = useParams();

    let Event = Events?.find((Event) => Event?.event == event);
    return (
        <div className="h-full bg-gray-200 p-8">
            <div className="bg-white rounded-lg shadow-xl pb-8">
                <div className="w-full h-[250px] -translate-y-1">
                    <img src={Event.eventCover} className="w-full h-full rounded-tl-lg rounded-tr-lg object-cover object-top outline-none" />
                </div>
                <div className="flex flex-col items-center -mt-20 select-none">
                    <img
                        src={Event.img}
                        className="w-40 border-4 border-white rounded-full z-10"
                    />
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-2xl select-all">{Event.speakername}</p>
                    </div>
                    <p className="text-gray-700">{Event.currentPost}</p>
                    <p className="text-sm text-gray-500">{Event.event}</p>
                </div>
            </div>

            {/* about block  */}
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                <h4 className="text-xl text-gray-900 font-bold">About {Event.speakername}</h4>
                <p className="mt-2 text-gray-700 select-all">
                    {Event.speakerdescription}
                </p>
            </div>

            {/* event points block  */}
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                <h4 className="text-xl text-gray-900 font-bold">Event Points</h4>
                <div className="relative px-4">
                    <div className="absolute h-full border border-dashed border-opacity-20 border-secondary" />
                    {/* start::Timeline item */}
                    {
                        Event.EventPoints.map((point) => {
                            return <TimeLineOne key={point.id} team={point.keyPoint} stage={point.keyPointExplain} />
                        })
                    }
                </div>
            </div>

            {/* about event  */}
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                <h4 className="text-xl text-gray-900 font-bold">About {Event.event}</h4>
                <p className="mt-2 text-gray-700 select-all">
                    {Event.eventDescription}
                </p>
            </div>



            {
                Event.eventPics && Event.eventPics.length > 0 ? <div className="flex flex-col bg-white rounded-lg shadow-xl mt-4 p-8  overflow-hidden">
                    <h4 className="text-xl text-gray-900 font-bold pb-2">Event Moments</h4>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            415: { // iPhone XR breakpoint
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                        }}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className='w-[44vw] md:w-[86vw] flex items-center justify-center m-auto'
                    >
                        {
                            Event.eventPics?.map((data, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-fit md:w-full rounded-md cursor-pointer shadow-2xl flex items-center justify-center'>

                                        <img src={data} className="w-[200px] sm:w-full rounded-md object-contain" />

                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div> : null
            }

        </div >
    );
};

export default EventsPage;