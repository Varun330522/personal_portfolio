import React from "react"
import { motion } from "framer-motion"

const SkillBox = ({ skill }) => {
  return (
    <motion.div
      className="flex flex-col text-center gap-2 box-shadow-style group-hover:tw-buzz"
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 30,
        duration: 2,
      }}
      whileHover={{ cursor: "pointer", className: "tw-buzz" }}
    >
      <div className="mb-4 group">
        <motion.i
          whileHover={{
            scale: [1, 1.25, 1.05, 1.25, 1],
            transition: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className={`ci ci-${skill.icon.iconName} ci-${skill.icon.iconStyle} `}
        ></motion.i>
      </div>
      <motion.h3
        whileHover={{ scale: 1.25 }}
        className="font-sora font-semibold text-zinc-300 text-sm mb-4"
      >
        {skill.name}
      </motion.h3>
    </motion.div>
  )
}

export default SkillBox
