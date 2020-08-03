import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import layoutStyles from "./layout.module.css"

export default function Layout(props) {
  return (
    <div>
    <div class='indexhdr'>
      <Header headerText={props.header} />
      <Link to = '/'><p>Home</p></Link>
      <Link to = '/contact/'><p>Contact</p></Link>
      <Link to = '/about/'><p>About Us</p></Link>
    </div>
    <div class='menu'>
      {props.children}
    </div>
    </div>
  )
}
