import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Model from "./components/Model"
import Highlights from "./components/Highlights"

const App = () => {

  return (
    <main className="bg-black">
      <NavBar/>
      <Hero />
      <Highlights/>
      <Model />
    </main>
  )
}

export default App
