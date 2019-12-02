import React from "react"

function Joke(props) {
    return (
        <div className = "JokeClass">
            <div>{props.question}</div>
            <div className="JokeAnswer">{props.answer}</div>
        </div>
    )    
}

export default Joke
