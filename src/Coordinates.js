import React, { useState, useEffect } from 'react'

export default function Coordinates() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)



    const logMouseCoordinates = (e) => {
        console.log('mouse event');
        setX(e.clientX)
        setY(e.clientY)
        // const element = document.elementFromPoint(x, y)
        // element.style.background = 'red'
        const helloCanvas = document.getElementById('can')
        const doDraw  = helloCanvas.getContext('2d')
        doDraw.beginPath()
        doDraw.moveTo(e.clientX-635,e.clientY)
        doDraw.lineTo(e.clientX-635,e.clientY-2)
        doDraw.stroke()
    }

    
    useEffect(() => {
        console.log('useEffect Called');
        window.addEventListener('mousemove', logMouseCoordinates)

// this is for Will Unmount the event listener 
        return ()=>{
            console.log('Component WillUnmount');
            window.removeEventListener('mousemove',logMouseCoordinates)
        }
    },[])

    return(
    <>
        <div>
            <h4>{`Coordinate X-${x} Coordinate Y-${y}`}</h4>
            <canvas id='can' style={{width:'50%', position:"absolute",marginRight:'20%'}}></canvas>
        </div>
    </>
    )
}