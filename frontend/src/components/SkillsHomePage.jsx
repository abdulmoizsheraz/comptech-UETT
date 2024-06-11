import React from 'react';
import Communication from '../assets/communication.svg';
import WebDevelopment from '../assets/web_dev.svg';
import App_dev from '../assets/app_dev.svg';

const data = [
    {
        id: 1,
        img: Communication,
        title: 'Communication',
        description: 'We foster communication skills through diverse interactions, public speaking opportunities, team projects, networking, and targeted hackathons.'

    },
    {
        id: 2,
        img: WebDevelopment,
        title: 'Web Development',
        description: 'Web development creates websites and applications for all devices, enabling interactive online experiences and global reach.'
    },
    {
        id: 3,
        img: App_dev,
        title: 'App Development',
        description: ' App development enables the creation of software applications for use on mobile devices such as smartphones and tablets, offering a wide range of functionalities and capabilities for users.'
    }
]

const SkillsHomePage = () => {
    return (
        <div>
            <div className="w-full bg-slate-100">
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-12">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-slate-950">
                            Enhanced Skills
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            data.map((skill) => {
                                return (
                                    <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center" key={skill.id}>
                                        <div className="mb-8">
                                            <img
                                                className="object-center object-cover h-24
                                     w-24
                                    "
                                                src={skill.img}
                                                alt="web_dev"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xl text-white font-bold mb-2">{skill.title}</p>
                                            <p className="text-base text-gray-400 font-normal">{skill.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </section>
            </div>

        </div>
    )
}

export default SkillsHomePage
