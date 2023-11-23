import React from "react";

export function Pokemon(props){
    return(
        <div>
            <img src={props.img}/>
            <h1>{props.name}</h1>
        </div>
    )
}