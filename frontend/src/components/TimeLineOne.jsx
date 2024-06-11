import React from 'react'

const TimeLineOne = ({ team, stage }) => {
    return (
        <div className="flex items-center w-full my-6 -ml-1.5">
            <div className="w-1/12 z-10">
                <div className="w-3.5 h-3.5 bg-comptech-100 rounded-full" />
            </div>
            <div className="w-11/12">
                <p className="text-sm">Team {team}</p>
                <p className="text-xs text-gray-500">{stage}</p>
            </div>
        </div>
    )
}

export default TimeLineOne
