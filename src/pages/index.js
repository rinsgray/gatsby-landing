import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div style={{ color: '#910033' }}>
    <Header headerText="This home page" />
    <Link to = '/contact/'><p>Contact</p></Link>
    <Link to = '/about/'><p>About Us</p></Link>
    <img src="http://source.unsplash.com/random/640x800"/>
  </div>
}
