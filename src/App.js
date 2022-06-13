import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { FacturacionComponent } from "./components/facturacion/Facturacion.Component";
import { LoginComponent } from "./components/login/Login.Component";
import { UsuarioComponent } from "./components/usuario/Usuario.Component";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/usuario" element={<UsuarioComponent />} />
          <Route path="/faturacion" element={<FacturacionComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
