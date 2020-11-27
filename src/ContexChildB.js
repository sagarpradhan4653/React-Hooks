import React,{useContext} from 'react'
import { CountContex } from './ContexParent'


export default function ContexChildB() {
    const ChildContex = useContext(CountContex)
    return (
        <div>
            Context Child B:
            {ChildContex.countState}

            <button onClick={()=>ChildContex.countDispatch('Increment')}>ContexIncrementB</button>
            <button onClick={()=>ChildContex.countDispatch('Decrement')}>ContextDecrementB</button>
            <button onClick={()=>ChildContex.countDispatch('Reset')}>ContextResetB</button>
        </div>
    )
}
