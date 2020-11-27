import React,{useContext} from 'react'
import { CountContex } from './ContexParent'


export default function ContexChildC() {
    const ChildContex = useContext(CountContex)
    return (
        <div>
            Context Child C:
            {ChildContex.countState}

            <button onClick={()=>ChildContex.countDispatch('Increment')}>ContexIncrementC</button>
            <button onClick={()=>ChildContex.countDispatch('Decrement')}>ContextDecrementC</button>
            <button onClick={()=>ChildContex.countDispatch('Reset')}>ContextResetC</button>
        </div>
    )
}
