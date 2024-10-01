import styled from "styled-components";
import Header from "../Components/Header/Header";
import Main from "../Components/HomeComponents/Main";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/HomeComponents/Banner";

const Bodycontainer = styled.div`
display: grid;
height: 100vh;
gap: 0.3em;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr;
grid-template-areas: 
                    "h h h h h h"
                    "b b b b b b"
                    ". m m m m ."
                    "f f f f f f";
@media screen and (max-width: 480px){
  display: grid;
  height: 100vh;
  gap: 0.3em;
  grid grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 
                      "h h h"
                      "b b b"
                      "m m m"
                      "f f f";
}
`

function Home() {
    return (
      <Bodycontainer>
        <Header>
        </Header>
        <Banner></Banner>
        <Main>
        </Main>
        <Footer></Footer>
      </Bodycontainer>
    )
  }

  export default Home;