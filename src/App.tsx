import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavCustom from "./components/NavCustom"
import Home from "./components/Home"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import CardDetail from "./components/CardDetail"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavCustom />
                <Home />
              </>
            }
          />
          <Route path="/details/:id" element={<CardDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
