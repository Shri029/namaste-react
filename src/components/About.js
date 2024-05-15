import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent component did Mount");
    }

    componentDidUpdate(){
        console.log(this.props.name,"Parent component did Update");
    }

    componentWillUnmount(){
        console.log(this.props.name,"Parent component will Unmount");
    }

    render(){ 
        console.log("Parent render");   
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React web series.</h2>

            <UserClass name={"First (class)"} location={"Delhi (class)"}/>
            <UserClass name={"Second (class)"} location={"Delhi (class)"}/>
            <UserClass name={"Third (class)"} location={"Delhi (class)"}/>
        </div>
    )}
}

export default About;


