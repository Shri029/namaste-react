import { useRouteError } from "react-router-dom";

    //useRouterError- provided by Recat-Router-DOM
    // const err =  useRouteError();
    // console.log(err);
const Error = () =>{
    return(
        <div>
            <div>
                <h1>Oops!</h1>
                <h2>Something went wrong!!</h2>
                {/* <h3>{err.status}: {err.statusText}</h3> */}
            </div>
        </div>
    )
}

export default Error;