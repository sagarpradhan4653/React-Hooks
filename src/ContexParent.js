import React, { useReducer } from 'react'
import ContexChildA from './ContexChildA'
import ContexChildB from './ContexChildB'
import ContexChildC from './ContexChildC'
import ContexChildD from './ContexChildD'

// export const CountContex = React.createContext()
export const CountContex = React.createContext()


const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1
        case 'Decrement':
            return state - 1
        case 'Reset':
            return initialState
        default:
            return state
    }

}



export default function ContexParent() {
    const [count, dispatch] = useReducer(reducer, initialState)


    return (
        <CountContex.Provider value={{ countState: count, countDispatch: dispatch }}>

            <div>
                <h1>Count: {count}</h1>
                <ContexChildA />
                <ContexChildB />
                <ContexChildC />
                <ContexChildD />
            </div>
        </CountContex.Provider>
    )
}
