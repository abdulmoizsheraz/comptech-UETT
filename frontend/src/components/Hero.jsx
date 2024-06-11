import React from 'react';
import '../css/Hero.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import Spline from '@splinetool/react-spline';
const Hero = () => {
    return (
        <div className='bg-comptech-950 lg:min-h-[60vh] min-h-[45vh] max-h-fit grid items-center py-16 relative'>
            <div className='w-10/12 m-auto flex md:flex-row flex-col h-fit'>
                <div className="lefthead min-w-72 w-3/5 flex flex-col gap-5 justify-center pt-12 md:p-0">
                    <h1 className='text-7xl lg:text-6xl font-semibold w-full text-slate-100 drop-shadow-lg'>Comptech <br /><span className='text-4xl md:text-6xl text-comptech-100 font-normal md:text-nowrap'>The Leading Tech</span></h1>
                    <small className='text-slate-400 font-medium w-full text-xs text-justify'>Comptech: Where burgeoning tech enthusiasts thrive through immersive learning experiences and collaborative projects, forging the next generation of innovators in the dynamic realm of Computer Science.</small>
                    <Link to="/events" className='events w-fit py-2 px-4 border-2 border-comptech-100 hover:bg-sky-500 text-slate-200 hover:font-semibold hover:text-comptech-950 flex flex-nowrap items-center gap-2 transition-all duration-200'>Explore Events <FaArrowRightLong className='arrowhead -translate-x-28 hidden' /></Link>
                </div>
                <div className="aspect-square w-4/10 md:aspect-video hidden lg:block drop-shadow-2xl">
                    <Spline scene="https://prod.spline.design/G0HMBjCxvzTXjZno/scene.splinecode" style={{ cursor: 'pointer' }} className='' />
                </div>
            </div>
        </div>
    )
}

export default Hero
