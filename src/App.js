import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { FacturacionComponent } from "./components/facturacion/Facturacion.Component";
import { LoginComponent } from "./components/login/Login.Component";
import { CatalogoComponent } from "./components/usuario/Catalogo.Component";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/catalogo" element={<CatalogoComponent />} />
          <Route path="/faturacion" element={<FacturacionComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
