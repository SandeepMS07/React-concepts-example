import React from 'react'

function Employee(props) {
    console.log(props);

    return (
       
            <div className='emp'>
                <h1>{props.ename}</h1>
                <img src={props.ephoto} alt="" />
                <h4>{props.esal}</h4>
                <h3>{props.children}</h3>
            </div>
        
    )
};


export default Employee
