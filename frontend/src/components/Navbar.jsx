import React, { useState } from 'react'
import logo from "../assets/comptech_logo.png";
// icons 
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { MdOutlineExpandMore } from "react-icons/md";
import { SiAzuredevops } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";

// components
import { Link } from "react-router-dom";
const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [open, setOpen] = useState(false);
    return (

        <div className="h-fit sticky top-0 z-50">
            <div className="antialiase w-full bg-comptech-950 bg-opacity-65">
                <div className="w-full text-gray-200 filter backdrop-blur">
                    <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div className="flex flex-row items-center justify-between p-4">
                            <Link to={"/"} className="dark:text-white focus:outline-none focus:shadow-outline"><img className="h-10 " src={logo} alt="comptech" /></Link>
                            <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => {
                                setOpenNav(!openNav)
                            }}>
                                {openNav ? <HiOutlineMenuAlt3 className={"text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-comptech-950 hover:bg-gray-200 focus:bg-gray-200 "} size={32} /> : <IoMenu className={"text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-comptech-950 hover:bg-gray-200 focus:bg-gray-200 "} size={32} />}
                            </button>
                        </div>
                        <nav className={`${openNav ? "flex" : "hidden"} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                            <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-comptech-950 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to={"/"}>Home</Link>
                            <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-comptech-950 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to={"/events"}>Events</Link>
                            <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-comptech-950 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to={"/cabinet"}>Cabinets</Link>
                            <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-comptech-950 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to={"/contact"}>Contact</Link>
                            <div className="relative">
                                <button onClick={() => {
                                    setOpen(!open)
                                }}
                                    className="flex flex-row whitespace-nowrap text-gray-200 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-comptech-950 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                    <span>Teams</span>
                                    <MdOutlineExpandMore className={`${open ? 'rotate-180' : 'rotate-0'} inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1`} />
                                </button>
                                <div className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right">
                                    {
                                        open ? <><div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark:bg-gray-700">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <Link className="flex row items-start rounded-lg bg-transparent p-2 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 text-comptech-950 hover:text-gray-900 focus:text-comptech-950 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to={"/teams/management"}>
                                                    <div className="bg-comptech-100 text-white rounded-lg p-3">
                                                        <MdManageAccounts />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="font-semibold">Management</p>
                                                    </div>
                                                </Link>

                                                <Link className="flex row items-start rounded-lg bg-transparent p-2 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white text-comptech-950 dark:text-gray-200 hover:text-gray-900 focus:text-comptech-950 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to={"/teams/logistics"}>
                                                    <div className="bg-comptech-100 text-white rounded-lg p-3">
                                                        <TbTruckDelivery />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="font-semibold">Logistics</p>
                                                    </div>
                                                </Link>
                                                <Link className="flex row items-start rounded-lg bg-transparent p-2 dark:hover:bg-gray-600 dark:focus:bg-gray-600 text-comptech-950 dark:text-gray-200 dark:focus:text-white dark:hover:text-white hover:text-gray-900 focus:text-comptech-950 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" to={"/teams/devs"}>
                                                    <div className="bg-comptech-100 text-white rounded-lg p-3">
                                                        <SiAzuredevops />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="font-semibold">DevsOps</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div></> : null
                                    }
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
