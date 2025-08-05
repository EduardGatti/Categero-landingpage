import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaHome from "./paginas/PaginaHome"
import PaginaBotao from "./paginas/PaginaBotao"

function App() {

  return (
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginaHome /> }/>
      <Route path="/botao" element={<PaginaBotao /> }/>
    </Routes>
     </BrowserRouter>
  )
}

export default App
