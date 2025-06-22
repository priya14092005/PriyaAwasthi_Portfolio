import React from 'react'
import "./Projects.css"
import Card from "../Card/Card"
import Airbnb from "../../assets/Airbnb.png"
import ApiCalling from "../../assets/ApiCalling.png"
import Blog from  "../../assets/BlogWebsite.png"
import Nike from "../../assets/Nike.png"
import Natours from "../../assets/Natours.png"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
 useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
   
})
  return (
    <div id="projects">
      <h1 id="para">
    "Self-Taught Web Developer | Strong in MERN Stack | Fresher"

      </h1>
      <div className="slider">
        <Card title="Private Rental Property" image={Airbnb}/>
         <Card title="API Calling Project" image={ApiCalling}/>
          <Card title="Blog Website" image={Blog}/>
            <Card title="Nike" image={Nike}/>
            <Card title="Natours" image={Natours}/>
      </div>
    </div>
  )
}

export default Projects
