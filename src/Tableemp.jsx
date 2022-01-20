import React from 'react'
import './Tableemp.css'

function Tableemp() {
    const details = [
        { 
            Name:"Sandeep",
            Image:"https://cdn.pixabay.com/photo/2021/03/03/10/20/portrait-6064965__340.jpg",
            Dept:"CSE",
            Marks:"650",
            Gender:"Male"
        },
        { 
            Name:"Rakesh",
            Image:"https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png",
            Dept:"iSE",
            Marks:"700",
            Gender:"Male"
        },
        { 
            Name:"Akash",
            Image:"https://cdn.pixabay.com/photo/2020/11/22/22/17/male-5768177__340.png",
            Dept:"ECE",
            Marks:"420",
            Gender:"Male"
        },
        { 
            Name:"Harsha",
            Image:"https://cdn.pixabay.com/photo/2021/01/18/08/32/naruto-5927441__340.png",
            Dept:"MECH",
            Marks:"520",
            Gender:"Male"
        },
        { 
            Name:"Sonia",
            Image:"https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png",
            Dept:"EEE",
            Marks:"820",
            Gender:"Female"
        }
    ]
    return (
        <div className='tableemp'>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Dept</th>
                    <th>Marks</th>
                    <th>Gender</th>
                </tr>
                {details.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{val.Name}</td>
                            <td>{<img src={val.Image} style={{height:"105px"}}/>}</td>
                            <td>{val.Dept}</td>
                            <td>{val.Marks}</td>
                            <td>{val.Gender}</td> 
                        </tr>
                        


                    )
                })}
                
            </table>
        </div>
    )
}

export default Tableemp;
