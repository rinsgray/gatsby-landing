import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return <div>
    <Header headerText = 'Index page' />
    <Link to='/about/'>About</Link>

  </div>
}
