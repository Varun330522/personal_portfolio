import { motion } from "framer-motion"
import Link from "next/link"
import Typewriter from "../../AnimatedComponents/TypeWriter"

const Leftsidehero = () => {
  const items = ["about", "work", "project", "blog", "skills", "contact"]
  const svgs_icon = [
    {
      class: "ci ci-github-light ci-2x",
      target: "https://github.com/Varun330522/",
    },
    {
      class: "ci ci-leetcode ci-2x",
      target: "https://leetcode.com/u/varunpersonal4/",
    },
    {
      class: "ci ci-linkedin ci-2x",
      target: "https://www.linkedin.com/in/varun-sheth-a66183190/",
    },
  ]

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="leftside-hero-wrapper">
      <div className="leftside-hero">
        <div className="max-w-full m-auto flex flex-col h-full items-center lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold text-slate-200 tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              Varun Sheth
            </motion.h1>
            <motion.h2
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 1, staggerChildren: 0.05 }}
              className="text-5xl font-bold text-slate-200 tracking-tight"
              whileHover={{ scale: 1.05 }}
            >
              Software Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "tween" }}
              className="mt-3 max-w-xs leading-normal"
              whileHover={{ scale: 1.02 }}
            >
              I engineer backend solutions for efficiency and scalability,
              complemented by captivating frontend experiences.
            </motion.p>
          </motion.div>
          <motion.nav className="hidden lg:block">
            <ul className="mt-4 w-max">
              {items.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.25, transition: { duration: 0.5 } }}
                >
                  <Link href={`/${item}`}>
                    <div className="group flex items-center py-3">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600"></span>
                      <span>{item.toUpperCase()}</span>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
          <motion.div className="flex flex-row justify-between gap-4 mt-6 mb-12 lg:mb-0">
            {svgs_icon.map((item, index) => (
              <motion.a
                key={item.class}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: [0.8, 1],
                  rotate: [0, -5, 3, -3, 0],
                  transition: {
                    duration: 0.5,
                    delay: 0.8 + index * 0.1, // Starting after the navigation items animation
                    ease: "easeInOut",
                  },
                }}
                className="bg-zinc-800 w-12 h-12 group rounded-full flex justify-center items-center transform-gpu"
                href={item.target}
                target="_blank"
              >
                <motion.i
                  key={item.class}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className={`${item.class} transform-gpu`}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Leftsidehero
