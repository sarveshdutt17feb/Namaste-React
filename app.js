import React from "react";
import ReactDOM from "react-dom/client";


const heading1  = React.createElement("h1",{
    id:"little",
    className:"myClass",
    
},"Heading 1 for parcel");
const heading2  = React.createElement("h2",{
    id:"little1",
    className:"myClass",
    
},"Heading 2");
const heading3  = React.createElement("h3",{
    id:"little1",
    className:"myClass",
    
},"Heading 3");

const container = React.createElement("div",{
    id:"container",
},[heading1,heading2,heading3]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
//this commit is for bundler!!
// file is changed
