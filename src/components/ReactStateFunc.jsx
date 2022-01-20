import React, { useState } from 'react'

function ReactStateFunc() {
    const [mycount, setmycount] = useState(0)
    // console.log(state);
    // console.log(useState(0));
    function counter()
    {
        setmycount(mycount+1)
    }
    function dec()
    {
        setmycount(mycount-1)
    }
    function reset()
    {
        setmycount(0)
    }
    return (
        <div>
            <h1>{mycount}</h1>
            <button onClick={counter}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ReactStateFunc
