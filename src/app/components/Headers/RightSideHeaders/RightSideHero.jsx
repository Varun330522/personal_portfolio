"use client"
import { motion } from "framer-motion"
import BlogComponent from "./BlogComponent"
import ProjectsComponent from "./ProjectsComponent"
import ContactComponent from "./ContactComponent"
import WorkComponent from "./WorkComponent"
import AboutComponent from "./AboutComponent"
import SkillComponent from "./SkillsComponent"

const Rightsidehero = () => {
  return (
    <div className="lg:w-1/2 lg:py-24 overflow-y-auto scroll-smooth ">
      <AboutComponent className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" />
      <SkillComponent className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" />
      <WorkComponent className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" />
      <ContactComponent />
      <ProjectsComponent />
      <BlogComponent />
    </div>
  )
}

export default Rightsidehero
