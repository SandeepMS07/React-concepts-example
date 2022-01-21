import React, { Component } from 'react';

export default class Forms extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         address:"",
         hobbies:"",
         gender:""
      }
    }
    changeUsername = (e) =>
    {
        this.setState({username:e.target.value})
    }

    changeAddress = (e) =>
    {
        this.setState({address:e.target.value})
    }
    
    changeHobbies = (e) =>
    {
        this.setState({hobbies:e.target.value})
    }

    changeGender = (e) =>
    {
        this.setState({gender:e.target.value})
    }

  render() {
    return <div>
            <div>
                <br />
            <label htmlFor="">Name : </label>
                <input type="password" value={this.state.username} placeholder='username' onChange={this.changeUsername}/> <br /> <br />
            <label htmlFor="">Address : </label>
                <textarea cols="30" value={this.state.address} rows="1" placeholder='Address' onChange={this.changeAddress}></textarea>
            </div>
            {/* select */}
            <div>
            <label htmlFor="">Hobbies</label>
                <select onChange={this.changeHobbies} value={this.state.hobbies}>
                    <option value="dancing">Dancing</option>
                    <option value="swimming">Swimming</option>
                    <option value="shouting">Shouting</option>
                    <option value="chatting">Chit Chatting</option>
                </select>
            </div>
            {/* Radio Button */}
            <div>
                <label htmlFor="">Gender :  </label>
                    <input type="radio" name="gender" id="g1" value="Male" onChange={this.changeGender} />
                <label htmlFor="g1">Male </label>
                    <input type="radio" name="gender" id="g2" value="Female" onChange={this.changeGender}/>
                <label htmlFor="g2">Female </label>
                    <input type="radio" name="gender" id="g3" value="others" onChange={this.changeGender}/>
                <label htmlFor="g3">Others </label> 
            </div>
            <h1>UserName : {this.state.username}</h1>
            <h1>Address : {this.state.address}</h1>
            <h1>My Hobbies : {this.state.hobbies}</h1>
            <h1>Gender : {this.state.gender}</h1>
    </div>;
  }
}
