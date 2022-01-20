import './student.css';
function student(props)
{
    console.log(props);
    return(
       
            <div className="student">   
                <h1> {props.sname} </h1>
                <img src={props.sphoto} alt="No Content" />
                <h3>{props.ssal}</h3>

            </div>
       
    )
}
export default student;