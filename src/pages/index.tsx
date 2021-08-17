import { Container, Planet, InicialApresentation } from '../styles/home';

import Navbar from '../components/Navbar';
import About from './about';



const Home = () => {
  return (
    <>
    <Navbar />
    <Container>
      <Planet />
      <InicialApresentation>
        <p>Olá,</p>
        <p>Me Chamo Leandro da Silva<br /></p> 
        <p className="enfase">Developer Front-End</p>       
      </InicialApresentation>
    </Container>
    </>
  );
};

export default Home;
