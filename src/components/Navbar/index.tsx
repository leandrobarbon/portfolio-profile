import React, { useState } from 'react';

import { Container, Logo } from './styles';
import {
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUserAstronaut,
  FaCode,
  FaEnvelope,
  FaGlobeAmericas,
  FaRegWindowClose,
} from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const Toggle = () => setIsOpen(!isOpen);
  const Close = () => setIsOpen(false);

  console.log(isOpen);

  return (
    <Container>
      <div className={isOpen ? 'main-container' : ''} onClick={() => Close()} />
      <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <Logo />

            <div>
              <a href="#home" className="nav-links">
                <FaHome size={32} />
              </a>
              <a className="nav-links">
                <FaUserAstronaut size={32} />
              </a>
              <a className="nav-links">
                <FaCode size={32} />
              </a>
              <a className="nav-links">
                <FaEnvelope size={32} />
              </a>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/leandro-da-silva-dev/" target="_blank">
                <FaLinkedin size={24} color="#551a8b"/>
              </a>
              <a href="https://github.com/leandrobarbon" target="_blank">
                <FaGithub size={24} color="#551a8b"/>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="nav-icon" onClick={Toggle}>
        {isOpen ? <FaRegWindowClose size={24} /> : <FaGlobeAmericas size={24} />}
      </div>

      {/* <Container className={isOpen ? "nav-menu active" : "nav-menu"}>
      <HeadNav>
      <Logo />
      <IconClose className={isOpen ? "main-container" : ""} onClick={()=>Close()}><FaRegWindowClose  size={24} color="red"/></IconClose>
      </HeadNav>    
      <Navigation>
        <li className="home"><FaHome size={32} /></li>
        <li className="about"><FaUserAstronaut size={32}/></li>
        <li className="project"><FaCode size={32}/></li>
        <li className="contact"><FaEnvelope size={32}/></li>
      </Navigation>
      <RedeSocial>
        <a href=""><FaLinkedin size={24} color="gray"/></a>
        <a href=""><FaGithub size={24} color="gray"/></a>
      </RedeSocial>
    </Container>
    <hrefggle onClick={hrefggle}><FaGlobeAmericas  color="#9b51e0" size={24}/></hrefggle> */}
    </Container>
  );
}

export default Navbar;
