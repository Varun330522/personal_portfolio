"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const Navbar = () => {
  const items = [
    "about",
    "work",
    "project",
    "blog",
    "skills",
    "contact",
    "resume",
  ]
  const parentVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
    hidden: {
      opacity: 0,
    },
    hover: { color: "#8892b0", cursor: "pointer", scale: 1.2 },
  }
  return (
    <div className="hidden sm:block">
      <motion.div
        className="fixed top-0 left-0 w-full h-[100px] mb-8"
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        transition={{ duration: 1.5 }}
      >
        <div className="max-w-[1366px] m-auto flex items-center justify-between h-full">
          <motion.div
            className="font-bold"
            initial="hidden"
            animate="visible"
            variants={parentVariants}
            transition={{ duration: 1.5 }}
          >
            <motion.span variants={variants} whileHover={"hover"}>
              varun sheth
            </motion.span>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            {items.map((item) => (
              <motion.div key={item} variants={variants}>
                <a>
                  <motion.span variants={variants} whileHover={"hover"}>
                    {item}
                  </motion.span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
