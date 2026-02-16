import { RouterProvider } from "react-router-dom"
import EstilosGlobais from "./components/EstilosGlobais/EstilosGlobais"
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema"
import { CafeteriasProvider } from "./contexts/CafeteriasContext"
import { router } from "./routes/router"

function App() {
  return (
    <ProvedorTema>
      <CafeteriasProvider>
        <EstilosGlobais />
        <RouterProvider router={router} />
      </CafeteriasProvider>
    </ProvedorTema>
  )
}

export default App
