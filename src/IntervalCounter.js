import React, { useState, useEffect } from 'react'


export default function IntervalCounter(props) {

    const [inter, UpdateInterval] = useState(0)



    // const countIncrease = () => {
    //     // UpdateInterval(inter + 1)
    //     UpdateInterval(prevCount=> prevCount+1)
    // }


    // useEffect(() => {
    //     const Interval = setInterval(countIncrease, 1000)
    //     return () => {
    //         clearInterval(Interval)
    //     }

    // }, [])

    // this for when we using subscription 
    const countIncrease = () => {
        UpdateInterval(inter + 1)
    }


    useEffect(() => {
        const Interval = setInterval(countIncrease, 1000)
        return () => {
            clearInterval(Interval)
        }

    }, [inter])
    return (
        <div>
            <h1>Interval Increase Every Seconds  {inter}</h1>
        </div>
    )

}