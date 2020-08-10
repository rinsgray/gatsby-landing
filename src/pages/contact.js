import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styles from "./contact.module.css"
import Container from "../components/container"
import Layout from "../components/layout"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function Contact() {
  return (
    <Layout header="Contact">
    <Container>
    <div style={{ color: 'teal' }}>
    </div>
    </Container>
    </Layout>
  )
}
