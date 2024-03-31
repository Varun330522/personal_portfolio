"use client"

import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import { Box } from "@chakra-ui/react"

export default function App() {
  const [backgroundPosition, setBackgroundPosition] = useState({
    x: 550,
    y: 12,
  }) // Initial position

  useEffect(() => {
    const handleMouseMove = (e) => {
      setBackgroundPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <Box
      className={styles.backgroundOverlay}
      style={{
        background: `radial-gradient(600px at ${backgroundPosition.x}px ${backgroundPosition.y}px, rgba(30, 90, 216, 0.25), transparent 30%)`,
      }}
    ></Box>
  )
}
