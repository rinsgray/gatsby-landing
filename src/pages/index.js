import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import styles from "./index.module.css"


const Artwork = props => (
<div className = {styles.artwork}>
  <img src = {props.image} className = {styles.indeximg}/>
  <div className = {styles.textimg}> {props.description}</div>
</div>
)

export default function Home() {
  return <div style={{ color: 'teal' }}>
    <div class="indexhdr">
      <Header headerText="This home page"/>
      <Link to = '/contact/'><p>Contact</p></Link>
      <Link to = '/about/'><p>About Us</p></Link>
    </div>

    <Artwork
      image = "http://source.unsplash.com/random/640x400"
      description = "Очень известный фотограф"
    />
    <Artwork
      image = "http://source.unsplash.com/random/640x460"
      description = "Чуть менее известный фотограф"
    />
    <Artwork
      image = "http://source.unsplash.com/random/640x450"
      description = "Тот самый фотограф"
    />




  </div>
}
