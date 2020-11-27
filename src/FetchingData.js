import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function FetchingData(props) {

    const [users, UpdateUsers] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setIdFromButton] = useState(1)


    const changeHandler =()=>{
        setIdFromButton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res => {
                console.log(res.data);
                UpdateUsers(res.data)
            })
    }, [idFromButton])



    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
            <button onClick={changeHandler}>Fetch Data !!</button>
            <h1>{users.body}</h1>

            {/* <ul>
                {user.map((item,index)=>{
                    return <li key={index}>{item.name}</li>
                })}
            </ul> */}
        </div>
    )
}
