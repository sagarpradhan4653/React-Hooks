import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function FetchingDataHook() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})



    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false)
            setError('')
            setPost(response.data)
        })
        .catch(error=>{
            setLoading(false)
            setError('Something Went Wrong!!!')
            setPost({})
        })

    })




    return (
        <div>
            {loading? 'loading': post.title}
            {error? error:null}
        </div>
    )
}
