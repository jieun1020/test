import React from "react";

export default function Menu(props){


    console.log("props",props)
    return(
        <div>
            <div>
                 Menu
            </div>
            
            <div>{props.cnt}</div>
            
            
        </div>


    )
}

