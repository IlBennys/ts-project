import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavCustom from "./components/NavCustom"
import Home from "./components/Home"
import { Route, BrowserRouter, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavCustom />
        <Home />
      </div>
    </BrowserRouter>
  )
}

export default App
