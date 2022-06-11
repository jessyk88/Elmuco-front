import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { LoginComponent } from "./components/login/Login.Component";
import { UsuarioComponent } from "./components/usuario/Usuario.Component";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/usuario" element={<UsuarioComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
