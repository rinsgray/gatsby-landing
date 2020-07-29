import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styles from "./contact.module.css"

export default function Home() {
  return <div style={{ color: 'teal' }}>
    <div class="indexhdr">
      <Header headerText="This home page"/>
      <Link to = '/contact/'><p>Contact</p></Link>
      <Link to = '/about/'><p>About Us</p></Link>
    </div>

    <div class="indeximg">
      <img src="http://source.unsplash.com/random/640x400" />
      <div class="textimg">Очень известный фотограф</div>
    </div>
    <div class="indeximg">
      <img src="http://source.unsplash.com/random/640x450" />
      <div class="textimg">Чуть менее известный фотограф</div>
    </div>
    <div class="indeximg">
      <img src="http://source.unsplash.com/random/640x440" />
      <div class="textimg">Тот самый фотограф</div>
    </div>
    <div class="indeximg">
      <img src="http://source.unsplash.com/random/640x460" />
      <div class="textimg">Фотограф...</div>
    </div>
  </div>
}
