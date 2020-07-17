import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div>
    <Header headerText="This home page" />
    <Link to = '/contact/'><p>Contact</p></Link>
    <Link to = '/about/'><p>About Us</p></Link>
  </div>
}
