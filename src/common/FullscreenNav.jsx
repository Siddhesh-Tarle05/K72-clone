import React, { useContext, useRef } from 'react'
import { NavContext } from '../context/FullscreenNavContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const FullscreenNav = () => {
  const { isOpen, setisOpen } = useContext(NavContext)

  const planeRef = useRef(null)
   const FullNav = useRef(null)
  function gsapAnimation() {
   
    let tl = gsap.timeline()
      // tl.to(FullNav.current, {
      //   display: "block"
      // })
      tl.set(FullNav.current, { display: "block" });
    tl.to(planeRef.current, {
      display: 'flex',
    })

    tl.to(".plane", {
      height:"100%",
      stagger: {
        amount: -0.2
      }
    })

    tl.to(".navLine", {
      opacity: 1,
      stagger: {
        amount: +0.2
      }
    })

 
  }

  function gsapAnimationReverse(){
     let tl = gsap.timeline()
    tl.to(planeRef.current, {
      display: 'flex',
    })

    tl.to(".plane", {
      delay:0.5,
      height: 0,
      stagger: {
        amount: -0.2
      }
    })

    tl.to(".navLine", {
      opacity: 0,
      stagger: {
        amount: +0.2
      }
    })
    tl.to(".FullNavbarParent", {
        display: "none"
      })
  }

  useGSAP(function () {
    if (isOpen) {
     gsapAnimation()
    }
    else {
    gsapAnimationReverse()
    }
  },[isOpen])
  return (


    <div ref={FullNav} className='FullNavbarParent'>

      <div ref={planeRef} className='planes'>
        <div className="plane"></div>
        <div className="plane"></div>
        <div className="plane"></div>
        <div className="plane"></div>
        <div className="plane"></div>
      </div>



      <div className='navLineParent'>
        <div className="iconSection">
          <div onClick={function () {
            setisOpen(false)
            console.log("done");
          }}>
            <i className="ri-close-fill"></i>
          </div>
        </div>

<div className='navLinesparent'>
 <div className='navLine'>
          <h1 className='work'>WORK</h1>
          <div className="pa">
            <div className='hovernav'>
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
            <div className='hovernav'>
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
          </div>
        </div>

        <div className='navLine'>
          <h1 className='Agency'>AGENCY</h1>
          <div className="pa">
            <div className='hovernav'>
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
            <div className='hovernav'>
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
          </div>
        </div>

        <div className='navLine'>
          <h1 className='Agency'>CONTACT</h1>
          <div className="pa">
            <div className='hovernav'>
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
            <div className='hovernav'>
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
          </div>
        </div>

        <div className='navLine'>
          <h1 className='Blog'>BLOG</h1>
          <div className="pa">
            <div className='hovernav'>
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
            <div className='hovernav'>
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
              <h1>SEE EVERYTHING</h1>
              <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
            </div>
          </div>
        </div>
</div>
       
      </div>

    </div>


  )
}

export default FullscreenNav
