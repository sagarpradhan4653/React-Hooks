import React,{useContext} from 'react'
import { CountContex } from './ContexParent'

export default function ContexChildD() {
    const ChildContex = useContext(CountContex)
    return (
        <div>
            Context Child D:
            {ChildContex.countState}

            <button onClick={()=>ChildContex.countDispatch('Increment')}>ContexIncrementD</button>
            <button onClick={()=>ChildContex.countDispatch('Decrement')}>ContextDecrementD</button>
            <button onClick={()=>ChildContex.countDispatch('Reset')}>ContextResetD</button>
        </div>
    )
}
