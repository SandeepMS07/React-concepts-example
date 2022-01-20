import React from 'react'

function DataTransfer(props) {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <button onClick={()=>props.myParent("child")}>click</button>
        </div>
    )
}

export default DataTransfer
