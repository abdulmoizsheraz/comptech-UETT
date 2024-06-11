import React, { useState } from 'react'
import applogo from "../assets/comptech_logo.png";
import { Link } from 'react-router-dom';


// icons
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";




const Footer = () => {
    const [contactmail, setContactmail] = useState("");
    const [suggestion, setSuggest] = useState("");
    return (
        <footer className="bg-comptech-950">
            <div className="container px-6 py-7 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                            Suggestions
                        </h1>
                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0  gap-2 ">
                            <input
                                id="email"
                                type="email"
                                value={contactmail}
                                onChange={(e) => {
                                    setContactmail(e.target.value)
                                }}
                                className="h-fit w-full md:w-80 px-4 py-2 text-gray-700 bg-white border rounded-sm dark:bg-gray-950 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-comptech-100 focus:ring-blue-300"
                                placeholder="Email Address"
                            />
                            <textarea
                                id="email"
                                type="email"
                                value={suggestion}
                                maxLength={300}
                                minLength={10}
                                onChange={(e) => {
                                    setSuggest(e.target.value)
                                }}
                                className="resize-y w-full md:w-80 px-4 py-2 text-gray-700 bg-white border rounded-sm dark:bg-gray-950 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-comptech-100 focus:ring-comptech-100 max-h-44"
                                placeholder="Suggestions"
                            ></textarea>
                            <button className="h-fit md:w-fit w-full px-6 py-2.5 text-sm font-medium tracking-wider text-slate-500 hover:text-comptech-100 transition-colors duration-300 transform  md:mx-4 focus:outline-none bg-gray-800 rounded-md hover:bg-gray-700 md:-translate-x-4">
                                Send
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">
                            Quick Links
                        </p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link
                                to="/"
                                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-comptech-100 hover:underline hover:text-comptech-100"
                            >
                                Home
                            </Link>
                            <Link
                                to="/events"
                                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-comptech-100 hover:underline hover:text-comptech-100"
                            >
                                Events
                            </Link>
                            <Link
                                to="/cabinet"
                                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-comptech-100 hover:underline hover:text-comptech-100"
                            >
                                Cabinets
                            </Link>
                            <Link
                                to="/contact"
                                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-comptech-100 hover:underline hover:text-comptech-100"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">
                            Teams
                        </p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link
                                to="/teams/management"
                                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-comptech-100 hover:underline hover:text-comptech-100"
                            >
                                Management
                            </Link>
                            <Link
                                to="/teams/logistics"
                                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-comptech-100 hover:underline hover:text-comptech-100"
                            >
                                Logistics
                            </Link>
                            <Link
                                to="/teams/devs"
                                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-comptech-100 hover:underline hover:text-comptech-100"
                            >
                                DevOps
                            </Link>

                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img
                            className="h-8"
                            src={applogo}
                            alt=""
                        />
                    </Link>
                    <div className="flex -mx-2">
                        <Link
                            to="https://mail.google.com/"
                            className="hover:-translate-y-[2px] mx-2 text-md text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-comptech-100 dark:hover:text-comptech-100"
                            aria-label="email"
                            target='_blank'
                        >
                            <SiMinutemailer />
                        </Link>
                        <Link
                            to="https://www.instagram.com/comptech_uettaxila?igsh=OW1qZml2bzVhNHpx"
                            className="hover:-translate-y-[2px] mx-2 text-md text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-comptech-100 dark:hover:text-comptech-100"
                            aria-label="instagram"
                            target='_blank'
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            to="https://www.facebook.com/COMPTECH.UET"
                            className="hover:-translate-y-[2px] mx-2 text-md text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-comptech-100 dark:hover:text-comptech-100"
                            aria-label="Facebook"
                            target='_blank'
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            to="https://twitter.com/"
                            className="hover:-translate-y-[2px] mx-2 text-md text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-comptech-100 dark:hover:text-comptech-100"
                            aria-label="twitter"
                            target='_blank'
                        >
                            <FaTwitter />

                        </Link>
                    </div>
                </div>
            </div>
        </footer >

    )
}

export default Footer
