"use client"
import { motion } from "framer-motion"
import Leftsidehero from "./LeftSideHeaders/LeftSideHero"
import Rightsidehero from "./RightSideHeaders/RightSideHero"


const Hero = () => {
  

  return (
    <div className="mx-auto px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-y-scroll">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <div className="lg:w-1/2">
          <Leftsidehero />
        </div>
        <Rightsidehero />
      </div>
    </div>
  )
}

export default Hero
