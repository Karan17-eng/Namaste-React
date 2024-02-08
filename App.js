const parent=React.createElement("div",{id: "partent"},[
    React.createElement("div", {id: "child"}, [
        React.createElement("h1",{}, "I am h1 tag"),
        React.createElement("h2",{},"Im h2 tag")

    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1", {},"I am an h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
    ]),

]);

//JSX

console.log(parent);

const root=ReactDOM.createElement(document.getElementById("root"));
root.render(parent);


