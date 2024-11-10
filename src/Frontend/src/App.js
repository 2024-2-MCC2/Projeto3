import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles";
import Quem_Somos from "./pages/Quem_Somos"
import ContatoPage from "./pages/Contato"
import Artigos from "./pages/Artigos";
import Dados from "./pages/Dados";
import Buscar_Ajuda from "./pages/Buscar_Ajuda";
import Login from "./pages/Login/login";
import EstruturaArtigos from "./Components/EstruturaArtigos";
import AreaUser from "./pages/Login/AreaUser";
import Cadastro from "./pages/Login/Cadastro";
import EsqueceuSenha from "./pages/Login/Esqueceu_Senha";

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
          <Route path="/Login" element ={<Login/>}/>
          <Route path="/Artigo/:id" element={<EstruturaArtigos/>}/>
          <Route path="/Area_Do_Usuario" element={<AreaUser/>}/>
          <Route path="/Cadastro" element={<Cadastro/>}/>
          <Route path="/Esqueceu_Senha" element={<EsqueceuSenha/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
