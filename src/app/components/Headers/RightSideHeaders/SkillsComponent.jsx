// Skills.js
import React, { useEffect, useRef } from "react"
import SkillBox from "./SkillBox"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const SkillComponent = () => {
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
  const skills = [
    { icon: { iconName: "html ", iconStyle: "2x" }, name: "html " },
    { icon: { iconName: "css ", iconStyle: "2x" }, name: "css " },
    { icon: { iconName: "js", iconStyle: "2x" }, name: "javascript" },
    { icon: { iconName: "tailwind", iconStyle: "2x" }, name: "tailwind" },
    { icon: { iconName: "nodejs ", iconStyle: "2x" }, name: "nodejs " },
    { icon: { iconName: "reactjs", iconStyle: "2x" }, name: "reactjs" },
    { icon: { iconName: "nextjs  ", iconStyle: "2x" }, name: "nextjs " },
    { icon: { iconName: "python ", iconStyle: "2x" }, name: "python " },
    { icon: { iconName: "django", iconStyle: "2x" }, name: "django" },
    { icon: { iconName: "postgresql ", iconStyle: "2x" }, name: "postgresql " },
    { icon: { iconName: "mongodb", iconStyle: "2x" }, name: "mongodb" },
    { icon: { iconName: "git", iconStyle: "2x" }, name: "git" },
  ]
  return (
    <div className="container overflow-x-hidden">
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        ref={scrollRef}
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Skills
        </h2>
      </div>
      <div ref={contentRef}>
        <h2 className="font-dm-sans text-3xl md:text-4xl xl:text-5xl font-semibold text-zinc-300 text-center leading-tight">
          Skills <span className="text-zinc-500">&</span> Experiences
        </h2>
        <div className="grid grid-cols-4  gap-8 mt-16">
          {skills.map((item, index) => (
            <SkillBox skill={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillComponent
