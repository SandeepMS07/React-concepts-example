
// import Students from './components/student';
// import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import ObjectBinding from './ObjectBinding';
// import ReactState from './components/ReactState';
// import ReactStateFunc from './components/ReactStateFunc';
// import ReactEvents from './ReactEvents';
// import ConditionalRendering from './ConditionalRendering';
// import Tableemp from './Tableemp';
// import Employee from './components/Employee';
// import DataTransfer from './components/DataTransfer';
// import ReactStateFunction from './ReactStateFunction';
// import ReactStateClass from './ReactStateClass';
// import {students as s} from './components/students'

function App() {
   // function parent(a)
   // {
   //    console.log("Hello I am parent ",a)
   // }
  return (
     <div className='App'>
         
         {/* <Students sname={s[0].sname} sphoto={s[0].sphoto} ssal={s[0].ssal}/> 
         <Students sname={s[1].sname} sphoto={s[1].sphoto} ssal={s[1].ssal}/> 
         <Students sname={s[2].sname} sphoto={s[2].sphoto} ssal={s[2].ssal}/> 
         <Students sname={s[3].sname} sphoto={s[3].sphoto} ssal={s[3].ssal} /> 
         <Students sname={s[4].sname} sphoto={s[4].sphoto} ssal={s[4].ssal}/>  */}

 
         {/* <ReactStateFunction/> */}
      {/* <ReactStateClass/> */}
      {/* <Tableemp/> */}
         
{/* Default props */}
         {/* <Employee ename={Employee[0].ename}
                   ephoto={Employee[0].ephoto}
                   esal={Employee[0].esal}/> */}

        
        
 {/* ?Passing data from child to parent */}
         {/* <DataTransfer name="Raju" myParent={parent}/> */}


{/* Conditional Rendering */}
         {/* <ConditionalRendering/>   */}

         {/* <ReactEvents/> */}

   {/* State */}
    
    {/* using class */}
   {/* <ReactState/>  */}

   {/* using function */}
   {/* <ReactStateFunc/> */}

   {/* Object Binding */}
   <ObjectBinding/>

     </div>
  );

}

// Employee.defaultProps  = {
//    ename:"Dinga",
//    ephoto: "https://cdn.pixabay.com/photo/2021/10/07/15/12/wine-6688901__480.jpg",
//    esal : "3000",
//    children : "2000"
// };

export default App;
