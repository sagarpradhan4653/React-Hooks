import React,{useContext} from 'react'
import { CountContex } from './ContexParent'

export default function ContexChildA() {
    const ChildContex = useContext(CountContex)
    return (
        <div>
            ContextChild A: 
            {ChildContex.countState}
            <button onClick={()=>ChildContex.countDispatch('Increment')}>ContexIncrementA</button>
            <button onClick={()=>ChildContex.countDispatch('Decrement')}>ContextDecrementA</button>
            <button onClick={()=>ChildContex.countDispatch('Reset')}>ContextResetA</button>
            <button onClick={()=>ChildContex.countDispatch('Decrement')}></button>
        </div>
    )
}
