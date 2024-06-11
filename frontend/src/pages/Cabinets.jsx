import React from 'react';
import TeamMember from '../components/Cabinet_Components/TeamMember';


// data for cabinet
import Cabinets from '../Data/CabinetData';


const Cabinet = () => {
    return (
        <div className='w-full min-h-screen flex items-center  bg-slate-200 flex-col gap-7 py-7'>
            <h1 className='text-3xl font-bold text-comptech-950 uppercase border-s-4 bg-slate-400 px-5 border-comptech-950 pl-3'>Cabinets</h1>
            {
                Cabinets.map((cabinet, index) => {
                    return (
                        <div className="cabinet flex flex-col w-10/12" key={index}>
                            <div className="flex flex-nowrap w-full m-auto mb-3">
                                <h1 className='text-xl md:text-2xl font-bold text-comptech-950 uppercase border-s-4 bg-slate-400 px-5 border-comptech-950 pl-3 text-nowrap'>Cabinet</h1>
                                <h1 className='text-xl md:text-2xl font-bold text-comptech-950 uppercase border-s-4 bg-slate-400 px-5 border-comptech-950 pl-3 text-nowrap'>{cabinet.session}</h1>
                            </div>
                            {/* cabinet part  */}
                            <div className="flex items-start justify-start min-h-screen bg-white py-10">
                                <div className="flex flex-col">
                                    <div className="flex flex-col mt-3">
                                        <div className="container max-w-7xl px-4">

                                            <div className="flex flex-wrap">
                                                {/* team holder */}
                                                {
                                                    cabinet.members.map((member) => {
                                                        return <TeamMember key={member.id} member={member} />
                                                    })
                                                }


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* cabinet ends */}

                        </div>
                    )
                })
            }
        </div >
    )
}

export default Cabinet
