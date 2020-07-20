import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { Link } from "gatsby"

export default function About() {
  return (
    <Container>
    <div style={{ color: 'teal' }}>
    <Header headerText = 'About Gatsby' />
      <p>Such wow. Very React.</p>
    <Link to='/'> Home </Link>
    </div>
    </Container>
  )
}
