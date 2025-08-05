import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaHome from "./paginas/PaginaHome"

function App() {

  return (
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginaHome /> }/>
    </Routes>
     </BrowserRouter>
  )
}

export default App
