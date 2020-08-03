import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout header="About Gatsby">
    <Container>
    <div style={{ color: 'black' }}>
      <p>Such wow. Very React.</p>
    </div>
    </Container>
    </Layout>
  )
}
