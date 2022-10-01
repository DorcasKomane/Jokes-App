import React from "react";

export default function Joke(props){
    return (
        <div>
            { props.setup && <p className="setup">{props.setup}</p>} {/*only display 'setup' if theres a value associated with it. */}
            <p className='punchline'>{props.punchline}</p>
        </div>
    );
}