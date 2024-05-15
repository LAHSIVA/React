const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
    "Hello From React"
);

console.log(heading) //It will return React element or JAVASCRIPT object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //It will take JS object has input it converts it into browser understandable and put it inside root.