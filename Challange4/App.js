import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke
                question="Why did a chicken cross the road?"
                answer="To get to the other side."
            /> 
            <Joke 
                question="Why do birds fly to warmer climates in the winter?"
                answer="It's miuch easier than walking!"
            /> 
            <Joke
                question="What creature is smarter than a talking parrot?"
                answer="A spelling bee."
            /> 
            <Joke
                question="How does the ocean say hello?"
                answer="It waves."
            /> 
            <Joke
                question="Why can’t you trust atoms?"
                answer="They make up everything."
            /> 
        </div>
    )
    
}

export default App
