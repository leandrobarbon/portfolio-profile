import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;  
  height: 100vh;
  width: 100%;

 
`;

export const Planet = styled.div`
  width: 50%;
  height: 80%;
  position: absolute;

  border-radius: 50%;
  border: 10px solid #5200FF;
  border-left-color: #eb05f7;
  background: transparent;
  animation: planet-rotate 0.01s linear infinite;
  
  

  @keyframes planet-rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
      text-shadow: 10rem #eb05f7;
    }
  }
  
`;


export const InicialApresentation = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors['white']};
  font-family: ${({ theme }) => theme.fonts['primary']};
  font-size: 48px;

  .enfase {
    text-align: right;
    color: ${({ theme }) => theme.colors['purple-led']};
    /* text-shadow: 0.1em 0.1em 0.2em; */

    animation: animeEnfase 2.5s linear infinite both;
  }

  @keyframes animeEnfase {
    0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    text-shadow: none;
  }
  10.1% {
    opacity: 1;
    text-shadow: none;
  }
  10.2% {
    opacity: 0;
    text-shadow: none;
  }
  20% {
    opacity: 0;
    text-shadow: none;
  }
  20.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.25);
  }
  20.6% {
    opacity: 0;
    text-shadow: none;
  }
  30% {
    opacity: 0;
    text-shadow: none;
  }
  30.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.45), 0 0 60px rgba(82, 0, 255, 0.25);
  }
  30.5% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 05), 0 0 60px rgba(82, 0, 255, 0.25);
  }
  30.6% {
    opacity: 0;
    text-shadow: none;
  }
  45% {
    opacity: 0;
    text-shadow: none;
  }
  45.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.45), 0 0 60px rgba(82, 0, 255, 0.25);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.45), 0 0 60px rgba(82, 0, 255, 0.25);
  }
  55% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.45), 0 0 60px rgba(82, 0, 255, 0.25);
  }
  55.1% {
    opacity: 0;
    text-shadow: none;
  }
  57% {
    opacity: 0;
    text-shadow: none;
  }
  57.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.55), 0 0 60px rgba(82, 0, 255, 0.35);
  }
  60% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.55), 0 0 60px rgba(82, 0, 255, 0.35);
  }
  60.1% {
    opacity: 0;
    text-shadow: none;
  }
  65% {
    opacity: 0;
    text-shadow: none;
  }
  65.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.55), 0 0 60px rgba(82, 0, 255, 0.35), 0 0 100px rgba(82, 0, 255, 0.1);
  }
  75% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.55), 0 0 60px rgba(82, 0, 255, 0.35), 0 0 100px rgba(82, 0, 255, 0.1);
  }
  75.1% {
    opacity: 0;
    text-shadow: none;
  }
  77% {
    opacity: 0;
    text-shadow: none;
  }
  77.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.55), 0 0 60px rgba(82, 0, 255, 0.4), 0 0 110px rgba(82, 0, 255, 0.2), 0 0 100px rgba(82, 0, 255, 0.1);
  }
  85% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.55), 0 0 60px rgba(82, 0, 255, 0.4), 0 0 110px rgba(82, 0, 255, 0.2), 0 0 100px rgba(82, 0, 255, 0.1);
  }
  85.1% {
    opacity: 0;
    text-shadow: none;
  }
  86% {
    opacity: 0;
    text-shadow: none;
  }
  86.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.6), 0 0 60px rgba(82, 0, 255, 0.45), 0 0 110px rgba(82, 0, 255, 0.25), 0 0 100px rgba(82, 0, 255, 0.1);
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(82, 0, 255, 0.6), 0 0 60px rgba(82, 0, 255, 0.45), 0 0 110px rgba(82, 0, 255, 0.25), 0 0 100px rgba(82, 0, 255, 0.1);
  }
}

`;
