import React,{useEffect, useReducer} from 'react'
import axios from 'axios'



const initialState = {
    loading: true,
    post :{},
    error:''
}

const reducer=(state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCES':
            return {
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                post:{},
                error:'Something Went Wrong'
            }
        default:
            return state
    }

}



function FetchingDataReducer() {
    const [NewState, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=> {
            dispatch({type:'FETCH_SUCCES', payload:response.data})
        })

        .catch(error=>{
            dispatch({type:'FETCH_ERROR'})
        })
    })
    return (
        <div>
            {NewState.laoding ? 'loading':NewState.post.title}
            {NewState.error? NewState.error:null}
        </div>
    )
}

export default FetchingDataReducer


