import React from 'react';
import { Link } from 'react-router-dom';

import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";



const TeamMembar = (props) => {
    const member = props.member;
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
                {/* Avatar */}
                <Link to={`/cabinet/${member.session}/${member.name}`} className="mx-auto">
                    <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-52 w-64 object-cover object-top"
                        src={member.img}
                    />
                </Link>
                {/* Details */}
                <div className="text-center mt-6">
                    {/* Name */}
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                        {member.name}
                    </h1>
                    {/* Title */}
                    <div className="text-gray-700 font-light mb-2">
                        {member.currentPost}
                    </div>
                    {/* Social Icons */}
                    <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
                    >
                        {/* Linkedin */}
                        <Link
                            to={member.linkedin}
                            target='_blank'
                            className="flex rounded-full hover:bg-blue-300 h-10 w-10 text-black  items-center justify-center"
                        >
                            <CiLinkedin className="text-black hover:text-slate-900 text-lg" />
                        </Link>
                        {/* Twitter */}
                        <Link
                            to={member.twitter}
                            target='_blank'
                            className="flex rounded-full hover:bg-sky-400 h-10 w-10 items-center justify-center"
                        >
                            <CiTwitter className="text-black hover:text-slate-900 text-lg" />
                        </Link>
                        {/* Instagram */}
                        <Link
                            to={member.instagram}
                            target='_blank'
                            className="flex rounded-full hover:bg-purple-300 h-10 w-10  items-center justify-center"
                        >
                            <CiInstagram className="text-black hover:text-slate-900 text-lg" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMembar
