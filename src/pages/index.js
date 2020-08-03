import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import styles from "./index.module.css"
import Layout from "../components/layout"

const Artwork = props => (
<div className = {styles.artwork}>
  <img src = {props.image} className = {styles.indeximg}/>
  <div className = {styles.textimg}> {props.description}</div>
</div>
)

export default function Home() {
  return(

  <Layout header="Test Page">

    <div class="image_top">
    <Artwork
      image = "http://source.unsplash.com/random/640x400"
      description = "Очень известный фотограф"
    />
    </div>
    <Artwork
      image = "http://source.unsplash.com/random/640x460"
      description = "Чуть менее известный фотограф"
    />
    <Artwork
      image = "http://source.unsplash.com/random/640x450"
      description = "Тот самый фотограф"
    />


  </Layout>
)
}
