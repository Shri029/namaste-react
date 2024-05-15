import { useState } from "react";

const User = (props) =>{
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);

    useEffect(()=>{
        //Api Calls
    },[]);
    return(
        <div className="user-card">
        <h1>Count= {count}</h1>
        <h1>Count1= {count1}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @shivani</h4>
        </div>
    );
}

export default User;