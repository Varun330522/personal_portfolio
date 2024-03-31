/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import React, { useEffect, useRef } from "react"
import Typewriter from "../../AnimatedComponents/TypeWriter"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const AboutComponent = () => {
  const scrollRef = useRef()
  const contentRef = useRef()
  useGSAP(() => {
    gsap.to(contentRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top 100px",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])
  return (
    <div className="container overflow-x-hidden">
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        ref={scrollRef}
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div ref={contentRef}>
        <h1 className="text-2xl md:text-4xl mb-4 font-bold">
          <Typewriter
            text={"Welcome to my portfolio!"}
            speed={0.05}
            delay={0}
          />
        </h1>
        <motion.div
          className="text-base md:text-lg flex flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2.5, type: "tween" }}
        >
          <p>
            {" "}
            I am a passionate individual who thrives on challenges and embraces
            opportunities for growth. My journey began at{" "}
            <i className="fa-solid fa-graduation-cap"></i>
            <span className="font-bold">
              {" "}
              Xavier Institute Of Engineering Mumbai
            </span>
            , where I honed my coding skills and cultivated a strong foundation
            in software development. With determination and perseverance, I
            secured a position at <i className="fa-solid fa-briefcase fa-sm" />{" "}
            <span className="font-bold"> LenDenClub </span>
            where I have continued to expand my expertise in the field.
          </p>
          <p>
            I am driven by a relentless pursuit of innovation and enjoy tackling
            complex problems with creative solutions. Whether it's developing
            cutting-edge software or exploring emerging technologies like
            Virtual Reality (VR)
          </p>
          <p>
            I currently work with
            <i className="ci ci-django ci-sm" /> django, for backend with SQL{" "}
            <i className="fa-solid fa-database fa-xs" /> databases.
          </p>
          <p>
            Thank you for visiting my portfolio. I invite you to explore further
            and discover more about my journey and the projects I've undertaken.
            Let's innovate together and build the future of technology.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutComponent
