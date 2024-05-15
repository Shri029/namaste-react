import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);

        this.state ={
            userInfo:{
                name:"Dummy",
                location:"Default",
            },
            count:0,
            count1:1,
        }
        console.log(this.props.name+"Child constructor");
    }

    async componentDidMount(){
        console.log(this.props.name,"Child component did Mount");
        //API call is done here.

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({userInfo:json,});
        console.log(json);
    }

    componentDidUpdate(){
        console.log(this.props.name,"Child component did Update");
    }

    componentWillUnmount(){
        console.log(this.props.name,"Child component will Unmount");
    }

//Class based component has a cfunction that returns a peice of jsx.
    render(){
        console.log("Child render");
        const {name, location, avtar_url} = this.state.userInfo;
        const {count, count1} = this.state;
        return(
            <div className="user-card">
            <h1>Count= {count}</h1>
            <button onClick={()=>{
                // set state to update state variable in class.
                this.setState({
                    count: this.state.count+1,
                    count2: this.state.count1+1,
                });
            }}>Increment count</button>
            <h1>Count1= {count1}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @shivani</h4>
            </div>
        );
    }
}

export default UserClass;


/* 
Output:-
Console was cleared
About.js:8 Parent constructor
About.js:15 Parent render
UserClass.js:7 {name: 'First (class)', location: 'Delhi (class)'}
UserClass.js:13 First (class)Child constructor
UserClass.js:23 Child render
UserClass.js:7 {name: 'Second (class)', location: 'Delhi (class)'}
UserClass.js:13 Second (class)Child constructor
UserClass.js:23 Child render

-----------------------DOM UPDATED IN ONE BATCH-------------------
UserClass.js:17 First (class) Child component did Mount
UserClass.js:17 Second (class) Child component did Mount
About.js:12 Parent component did Mount
*/

/* 
----------MOUNTING---------------
*Constructor(Dummy)
*Render(Dummy)
*   <HTML Dummy>
*Component Did Mount
*   <API Call>
*   <this.setState> -> State variable is updated.
*
*-----Update
*render(API data)
*<HTML (new API data)>
*    Componentdidupdate
*/