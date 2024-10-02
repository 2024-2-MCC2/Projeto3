import { createGlobalStyle } from "styled-components";
import BG from "../assets/2cf671e6-48f4-4409-b2ea-055880bbeb90.jpg"
const GlobalStyles = createGlobalStyle`
body{
    font-family: Arial, Helvetica, sans-serif;
    background: url('${BG}');
}
`

export default GlobalStyles;