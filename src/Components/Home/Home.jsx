import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { TypeAnimation } from 'react-type-animation';
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
const Home = () => {

useGSAP(() => {
  let tl1=gsap.timeline();
  tl1.from(".line1",{
    y:100,
    duration:1,
    opacity:0

  })
   tl1.from(".line2",{
    y:80,
    duration:1,
    opacity:0

  })
   tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0

  })
  gsap.from(".righthome img", {
    x:200,
    duration:1,
  opacity:0
  })
})


  return (

    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
           <div className="line2">PRIYA AWASTHI</div>
            <div className="line3">
              <TypeAnimation
                       sequence={[
                      'WEB DEVELOPER',
                      1500,
                      'SOFTWARE DEVELOPER',
                      1500,
                     'EDITOR',
                      1500,
  ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: '1em', display: 'inline-block' }}
                 repeat={Infinity}
                
/>
            </div>
            <button>HIRE ME</button>
        </div>
      </div>
       <div className="righthome">
      <img src={man} alt="" />
    </div>
    </div>
   
  )
}

export default Home
