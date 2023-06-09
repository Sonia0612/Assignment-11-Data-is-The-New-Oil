// import { Outlet } from 'react-router-dom';
// function About() {
//   return (
//     <div>
//       <h1>About page</h1>
//       <h2><Outlet/></h2>
//     </div>
//   )
// }

//Class based Component:
import { Component } from "react";
import UserContext from "../utils/UserContext";
import ProfileClass from  "./ProfileClass";

class About extends Component{
  constructor(props){
    super(props);
    console.log("Parent-Constructor");
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  render(){
    console.log("Parent-render");
    return(
      <div>
        <h1>hello! I'm a class Based Component</h1>
        <ProfileClass name={"REACT"}/>
        <UserContext.Consumer>
          {({user})=><h1>User from context:{user.name}</h1>}
        </UserContext.Consumer>
        {/* <ProfileClass name={"REACT2"}/> */}
      </div>
    )
  }
}
export default About
