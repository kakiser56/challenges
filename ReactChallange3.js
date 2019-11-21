// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component

import React from "react"
import ReactDOM from "react-dom"

import Main from "./Main"
import Nav from "./Nav"
import Footer from "./Footer"


function MainContent() {
  return (
    <div>
      <Nav/>
      <Main />
      <Footer />
    </div>
  ) 
}

ReactDOM.render(<MainContent/>, document.getElementById('root'));

Main.js
import React from "react"

function Main() {
  return (
	  <div>
	  <p>Main Content</p>
	  <ul>
	  <li>One</li>
	  <li>Two</li>
	  </ul
    </div>
  ) 
}
export default Main

Nav.js
import React from "react"

function Nav() {
    return (
	    <p>I am a nav bar</p>
    );
}
export default Nav

Footer.js
import React from "react"

function Footer() {
    return (
	    <p>I am a footer</p>
    );
}
export default Footer

