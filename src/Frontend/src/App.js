import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles";
import Quem_Somos from "./pages/Quem_Somos"
import ContatoPage from "./pages/Contato"
import Artigos from "./pages/Artigos";
import Dados from "./pages/Dados";
import Buscar_Ajuda from "./pages/Buscar_Ajuda";
import Ongs from "./pages/Ongs"
import DSTsISTs from "./pages/DSTs_ISTs"
import GravidezAdoles from "./pages/GravidezAdolesInpa";
import VacinaGravidez from "./pages/Vacina_Gravidez";
import Login from "./pages/Login/login";
import EstruturaArtigos from "./Components/EstruturaArtigos";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyles></GlobalStyles>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Artigos" element={<Artigos/>}/>
          <Route path="/Quem_Somos" element={<Quem_Somos/>}/>
          <Route path="/ContatoPage" element={<ContatoPage/>}/>
          <Route path="/Dados" element={<Dados/>}/>
          <Route path="/Buscar_Ajuda" element={<Buscar_Ajuda/>}/>
          <Route path="/Ongs" element ={<Ongs/>}/>
          <Route path="/DSTs_ISTs" element = {<DSTsISTs/>}/>
          <Route path="/Impactos_Gravidez_Adolescencia" element = {<GravidezAdoles/>}/>
          <Route path="/Vacina_Gravidez" element = {<VacinaGravidez/>}/>
          <Route path="/Login" element ={<Login/>}/>
          <Route path="/Artigo/:id" element={<EstruturaArtigos/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App;
