import Home from "./pages/Home"
import Herpes from "./pages/Herpes_Genital"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles";
import Quem_Somos from "./pages/Quem_Somos"
import Gonorreia from "./pages/Gonorreia"
import Contato from "./pages/Contato"
import Artigos from "./pages/Artigos";
import Dados from "./pages/Dados";
import Buscar_Ajuda from "./pages/Buscar_Ajuda";
import Ongs from "./pages/Ongs"
import HIV from "./pages/HIV"
import Sifilis from "./pages/Sifilis"
import HepatiteViral from "./pages/Hepatite_Viral";
import Clamidia from "./pages/Clamidia";
import HPVGenital from "./pages/HPV_Genital"
import DSTsISTs from "./pages/DSTs_ISTs"
import GravidezAdoles from "./pages/GravidezAdolesInpa";
import VacinaGravidez from "./pages/Vacina_Gravidez";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyles></GlobalStyles>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Gonorreia" element={<Gonorreia/>}/>
          <Route path="/Artigos" element={<Artigos/>}/>
          <Route path="/Herpes_Genital" element={<Herpes/>}/>
          <Route path="/Quem_Somos" element={<Quem_Somos/>}/>
          <Route path="/Contato" element={<Contato/>}/>
          <Route path="/Dados" element={<Dados/>}/>
          <Route path="/Buscar_Ajuda" element={<Buscar_Ajuda/>}/>
          <Route path="/Ongs" element ={<Ongs/>}/>
          <Route path="/HIV" element = {<HIV/>}/>
          <Route path="/Sifilis" element = {<Sifilis/>}/>
          <Route path="/Hepatite_Viral" element = {<HepatiteViral/>}/>
          <Route path="/Clamidia" element = {<Clamidia/>}/>
          <Route path="/HPV_Genital" element = {<HPVGenital/>}/>
          <Route path="/DSTs_ISTs" element = {<DSTsISTs/>}/>
          <Route path="/Impactos_Gravidez_Adolescencia" element = {<GravidezAdoles/>}/>
          <Route path="/Vacina_Gravidez" element = {<VacinaGravidez/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App;
