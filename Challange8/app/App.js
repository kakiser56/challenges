import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isGlutenFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState(prevState => {
                return {
                        dietaryRestrictions: {
                            ...prevState.dietaryRestrictions,
                            [name] : checked
                        }
                    }
            }) : 
            this.setState({
                [name] : value
            })
    }
    render() {
        return (
            <main>
                <form>
                    <input name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" /><br />
                    <input name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" /><br />
                    <input name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age" /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            checked={this.state.gender === 'male'} 
                            onChange={this.handleChange}/> 
                            Male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="female" 
                            checked={this.state.gender === 'female'} 
                            onChange={this.handleChange}/> 
                            Female
                    </label>
                    <br />
                    
                    {/* Create select box for location here */}
                    <select name='destination' value={this.state.destination} onChange={this.handleChange}>
                        <option value="">-Select-</option>
                        <option value="germany">Germany</option>
                        <option value="antartic">Anartic</option>
                        <option value="france">France</option>
                        <option value="england">England</option>
                    </select> 
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <label><input type="checkBox" name="isVegan" onChange={this.handleChange} checked={this.state.dietaryRestrictions.isVegan}/>Vegen?</label>
                    <br />
                    <label><input type="checkBox" name="isKosher" onChange={this.handleChange} checked={this.state.dietaryRestrictions.isKosher}/>Kosher?</label>
                    <br />
                    <label><input type="checkBox" name="isGlutenFree" onChange={this.handleChange} checked={this.state.dietaryRestrictions.isGlutenFree}/>Gluten Free?</label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    <br/>
                        Vegan: {this.state.dietaryRestrictions.isVegan ? "Yes" : "No"},
                        <br/>
                        Kosher: {this.state.dietaryRestrictions.isKosher ? "Yes" : "No"},
                        <br/>
                        Gluten Free: {this.state.dietaryRestrictions.isGlutenFree ? "Yes" : "No"}

                </p>
            </main>
        )
    }
}

export default App
