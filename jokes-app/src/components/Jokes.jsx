import React from "react";

export default function Jokes(props){
    return (
        <div>
            <p className="setup">{props.setup}</p>
            <p className='punchline'>{props.punchline}</p>
        </div>
    );
}