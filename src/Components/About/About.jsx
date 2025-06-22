import React from 'react'
import "./About.css"
import Card from "../Card/Card"
import mern from "../../assets/mern.png"
import javascript from "../../assets/Javascript.png"
import dsa from "../../assets/dsa.png"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(() => {
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
       start:"top 60%",
        end:"top 30%",
    }
    })
     gsap.from(".line",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger:".line",
          scroll:"body",
          scrub:2,
          start:"top 60%",
          end:"top 30%"
  
        } 
     
  })
   gsap.from(".aboutdetails h1",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger:".aboutdetails h1",
          scroll:"body",
          scrub:2,
          start:"top 60%",
          end:"top 30%"
  
        } 
     
  })
   gsap.from(".aboutdetails ul",{
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger:".aboutdetails ul",
          scroll:"body",
          scrub:2,
          start:"top 60%",
          end:"top 30%"
  
        } 
     
  })
  gsap.from(".rightabout",{
  x:100,
  duration:1,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:".rightabout",
    scroll:"body",
    scrub:2,
  
    start:"top 60%",
    end:"top 30%"

  }
})
  })
  return (
    <div id="about">
      <div className="leftabout">
         <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
         </div>
         <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                 <span>NAME</span> :  PRIYA AWASTHI
              </li>
               <li>
                 <span>AGE</span> :  20
              </li>
               <li>
                 <span>GENDER</span> :  FEMALE
              </li>
               <li>
                 <span>LANGUAGE KNOWN</span> :  HINDI , ENGLISH
              </li>
            </ul>
          </div>

        <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                 <span>DEGREE</span> :  BCA
              </li>
               <li>
                 <span>BRANCH</span> :  COMPUTER APLLICATION
              </li>
               <li>
                 <span>PERCENTAGE</span> :  86%
              </li>
               
            </ul>
          </div>


           <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                 <span>MERN STACK</span>
              </li>
               <li>
                 <span>JAVASCRIPT</span>
              </li>
               <li>
                 <span>DSA(JAVASCRIPT)</span>
              </li>
               
            </ul>
          </div>

         </div>
      </div>




      <div className="rightabout">
        <Card title={"MERN STACK DEVELOPER"} image={mern}/>
         <Card title={"JAVASCRIPT"}  image={javascript}/> 
         <Card title={"DSA"}  image={dsa}/>
      </div>
    </div>
  )
}

export default About
 