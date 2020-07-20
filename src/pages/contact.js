import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styles from "./contact.module.css"

console.log(styles)

export default function Contact() {
  return (
    <div style={{ color: 'teal' }}>
      <Header headerText="Contact" />
      <Link to = '/'> Home </Link>
    </div>

  )

}
