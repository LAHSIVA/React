import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//     "h1",
//     {id:"heading",xyz:"abc"},
//     "Hello From React"
// );

// console.log(heading) //It will return React element or JAVASCRIPT object 

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //It will take JS object has input it converts it into browser understandable and put it inside root.

// <div id="parent">
//     <div id="child">
//         <h1>I'M h1 tag</h1>
//     </div>
// </div>

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"I'M h1 tag")
//     )
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// <div id="parent">
//     <div id="child">
//         <h1>I'M h1 tag</h1>
//         <h2>I'M h1 tag</h2>
//     </div>
// </div>


const parent = React.createElement("div",
{id:"parent"},
React.createElement("div",
{id:"child"},[
    React.createElement("h1",{},"I'M h1 tag"),
    React.createElement("h2",{},"I'M h2 tag")
]
)
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);