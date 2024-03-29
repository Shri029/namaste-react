import React from "react";
import ReactDOM from "react-dom/client";

/* 
  React.createElement  => ReactElement( JS object) => When rendered on DOM becomes HTML(Browser Understands)
  Not developer friendly -> JSX came into picture
  JSX(created by Facebook devs) - not HTML in JS it is HTML like syntax, more like xml

  JS engine understands ECMAScript. ES 
  Parcel transpiles JSX code for browser to understand.
  JSX(transpiled by PARCEL before reaching browser) - PARCEL -> Babel
  PARCEL uses Babel to transpile the JSX code for React to understand.

  Equivalent to using React.createElement
  JSX => React.createElement => ReactElement- JS object => HTMLElement(render)

  https://babeljs.io/docs/

  JSX version of below const heading.
  const jsxHeading = <h1 id="heading" className="head" tabindex="1">React using JSX</h1>;
  */
const heading = React.createElement("h1", {id: "heading"}, "Namaste react");

/* 
  React component
  Two types of component
  i)  Class Based component - OLD
  ii) Functional components - NEW

  React functional component:- 
    - a javascript function that returns JSX code/React element.

    A function returning true.

    const fn = () => true; same as 
    const fn2 = () => { return true };

    JSX takes care of injection attack.

    {} - sanitizes data passed into jsx

    Code is fast because of JSX.
 */

const elem = <span>A React element example</span>

const TitleElement = (<h1 className="heading" tabIndex="5">{elem} and another React Element.</h1>);

const Title = () =>{
  return <h1 className="heading" tabIndex="5">Namaste React functional component.</h1>
}
// Put React element inside component//Component Composition - A component inside other component

const HeadingComponent = () =>( 
    <div id="container">
      {TitleElement}
      {/* Below 3 are same */}
      {Title()}
      <Title/>
      <Title></Title>
      <h1 className="heading" tabIndex="5">Inside React functional component.</h1>
    </div>
  )



//root is root for React app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Appraoch 1
// root.render(heading);

// Appraoch 2
// root.render(jsxHeading);

// Appraoch 3
root.render(<HeadingComponent/>);


