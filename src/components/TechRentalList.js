import React from 'react'
import TechRentalCard from './TechRentalCard'

export default function TechRentalList() {
    return (
        <div>
            {/* map out list and then render Tech card */}
            <TechRentalCard/>
            <button>Add Tech</button>            
        </div>
    )
}
