import { Container, Planet, Universe, Orb, Rocket, Star, InicialApresentation } from '../styles/home';

import { FaSatellite, FaSpaceShuttle } from 'react-icons/fa';



import Moon from '../components/Moon';
import SvgPrime from '../components/SvgPrime';
import Sun from '../components/Sun';
import Navbar from '../components/Navbar';
import About from './about';

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
         {/* <Moon />
        <Universe>
              <Sun />
        </Universe> */}
        <SvgPrime />
        <InicialApresentation>
          {/* <p>Olá,</p>
          <p>
            Me Chamo Leandro da Silva
            <br />
          </p>
          <p className="enfase">Front-End Develover</p> */}
        </InicialApresentation> 
      </Container>
    </>
  );
};

export default Home;
