import App from "./components/AnimatedComponents/App"
import Hero from "./components/Headers/Hero"
import Navbar from "./components/Navbar/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <App />
    </div>
  )
}
