import React, { useState } from 'react';

function ObjectBindingFunction() {
    const [sname, setsname] = useState("Dinga");
    let changeName = () =>
    {
        setsname("Raju")
    }
    return <div>
        <h1>{sname}</h1>
        <button onClick={changeName}>Click to change name</button>
    </div>;
}

export default ObjectBindingFunction;
