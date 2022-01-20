import React from 'react'

function ReactEvents() {
    function m1(e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
    }
    return (
        <div>
            <button onClick={m1}>click</button>
            <input type="text" onChange={m1}/>
        </div>
    )
}

export default ReactEvents
