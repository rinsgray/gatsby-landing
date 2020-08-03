import React from "react"
import { Link } from "gatsby"
import Header from "./header"

export default function Layout(props) {
  return (
    <div>
    <div class="indexhdr">
      <Header headerText={props.header} />
      <Link to = '/'><p>Home</p></Link>
      <Link to = '/contact/'><p>Contact</p></Link>
      <Link to = '/about/'><p>About Us</p></Link>
    </div>
    <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
      {props.children}
    </div>
    </div>
  )
}
