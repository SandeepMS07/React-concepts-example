import React, { useState } from 'react'


function ReactStateFunction() { 
    const [myCount, setmyCount] = useState(1);
    function counterInc()
    {
        setmyCount(myCount+1);
    }

    function counterDec()
    {
        setmyCount(myCount-1);
    }
    function reSet()
    {
        setmyCount(1);
    }
    return (
        <div>
            <div>
                <h1>
                    {myCount}
                </h1>
                <button onClick={counterInc}>Increment</button>
                <button onClick={counterDec}>Decrement</button>
                <button onClick={reSet}>Reset</button>
            </div>
        </div>
    )
}

export default ReactStateFunction;
