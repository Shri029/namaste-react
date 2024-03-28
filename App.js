// <div id="parent">
//   <div id="child">
//     <h1>I am h1 tag.</h1>
//     <h2>I am h1 tag.</h2>
//   </div>
// </div>

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello World from React!"
// );

// ReactElement(object) => HTML(Browser Understands)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);
console.log(parent); // An object
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render method is responsible to convert this React element in heading tag and put it upon the DOM
root.render(parent);
