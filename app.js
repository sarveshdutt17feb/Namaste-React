import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ===(gives us)==obj ==>(coverted) in html dom


//jsx ==React.createElement ==object ==html(dom)
const title  = (
<h1 id="title" key="h2" >
    Namaste react  
    </h1>
);

const HeaderComponent = ()=>{
     return (
        <div>
            {title}
            <h2>namaste react from fumctional component</h2>
            <h2>this is h2 tag</h2>
        </div> 
     ); 
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
// commit new