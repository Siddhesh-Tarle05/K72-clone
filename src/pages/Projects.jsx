import React from 'react'
import WorkLine from '../components/projects/WorkLine'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
  
  useGSAP(function(){
    gsap.from('.WorkLine',{
      height:"200px",
      stagger:{
        amount:0.5
      },
      scrollTrigger:{
        target:'.AllWorks',
        markers:true,
        start:"top100%",
        end:"top -350%",
        scrub:true
      }
    })
  })
   const Images=[{
        img1:"https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93",
        img2:"https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
    },
        {
        img1:"https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
        img2:"https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022"
    },{
        img1:"https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996",
        img2:"https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c"
    },{
        img1:"https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
        img2:"https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860"
    }]
  return (
    <div>
      <div className='WorkHeadingDiv'>
        <h1 className='WorkHeading'>WORK</h1>
      </div>
      <div className='AllWorks'>
      {Images.map(function(elem,idx){
       return <div 
      key={idx} className='WorkLine'> 
          <WorkLine img1={elem.img1} img2={elem.img2}/>
       </div>
      
      })}
      </div>
    </div>
  )
}

export default Projects
