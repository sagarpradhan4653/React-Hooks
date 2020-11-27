import React, { useState,useEffect } from 'react'

export default function Hook(props) {


    const [groc, UpdateGroceries] = useState('')
    const [gorc1, UpdateGroceries1] = useState([])

// this is for updating title with after every execution
    useEffect(()=>{
        document.title = `hello sir ${groc.length}`
    })


    const CustName = (event) => {
        UpdateGroceries(event.target.value)
    }


    const CustName1 = () => {
        UpdateGroceries1([...gorc1, { name: groc }])

    }

 

    return (


        <div className="card text-white bg-dark mb-3">
            <div className="card-header">React</div>
            <div className="card-body">
                <h1>Hooks Todo List</h1>
                <input onChange={CustName}></input>
                <button className="badge  badge-warning " onClick={CustName1}>Add Me</button>
                <ul id="unorder">
                    {gorc1.map((item, index) => {
                        return <li key={index}>{item.name}</li>
                    })}
                </ul>
            </div>

        </div>
    )

}