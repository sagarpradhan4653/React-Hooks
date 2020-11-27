import React, { useState } from 'react'
import Coordinates from './Coordinates'

export default function MouseUnmount() {



    const [toggle, UpdateToggle] = useState(true)



    return (
        <div>
            
            <button onClick={() => UpdateToggle(false)}>Stop Mounting</button>
            <button onClick={()=> UpdateToggle(true)}>Reset Mounting</button>
            {toggle && <Coordinates/>}
        </div>
    )
}
