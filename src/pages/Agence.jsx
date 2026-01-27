
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Agence = () => {
  const imageArr = [
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
  ]
  const Img = useRef(null)
  
  useEffect(() => {
  imageArr.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, []);

  useGSAP(function () {
    gsap.to(Img.current, {
      scrollTrigger: {
        trigger: Img.current,
        start: "top 36%",
        end: "top -150%",
        pin: true,
        scrub: true,
       
        onUpdate: (self) => {
  const index = Math.min(
    imageArr.length - 1,
    Math.floor(self.progress * imageArr.length)
  );

  Img.current.src = imageArr[index];
}

      }
    }
    )
  })

  return (
    <div className='Agencediv'>

      <div  className="imgContainer">

     <img className="imgContainerImg" ref={Img} src={imageArr[0]} alt="" />

      </div>
      <div className="AgenceText">
        <h1 className='AgenceHeading'>SEVEN7Y <br /> TWO</h1>
        <p className='AgencePara'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.


        </p>
      </div>
    </div>
  )
}

export default Agence
