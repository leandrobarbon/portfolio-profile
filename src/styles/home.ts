import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  
`;

export const Universe = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  margin-right: 64px;
`;

export const Planet = styled.img`
  width: 80px;
  height: 80px;
  display: flex;

  background: transparent;
  animation: planet-rotate 10s linear infinite;

  @keyframes planet-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Orb = styled.div`
  transform: rotate(160deg);
  margin: -100px;
`;


export const Rocket = styled.div`
  offset-path: path(
    'M1634.5 478.176C1634.5 636.681 750 454 801 123C839.5 -330.5 0.5 636.681 0.5 478.176C0.5 319.67 688 394.5 999.5 123C1464 -49.0003 1634.5 319.67 1634.5 478.176Z'
  );
  animation: move 30s infinite normal both;
  width: 10px;
  height: 10px;

  transform: rotate(0deg);

  @keyframes move {
    0% {
      offset-distance: 0%;
    }
    100% {
      offset-distance: 50%;
    }
  }
`;

export const Star = styled.ul`
  /* width: 1200px;
  height: 100vh;

  

  li{
    margin-left: 128px;
    margin-top: 32px;
  list-style: none;
  position: absolute;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: white;
  }
  &:before {
    width: 10px;
    height: 2px;
    border-radius: 50%;
  }
  &:after {
    height: 8px;
    width: 2px;
    left: 4px;
    top: -3px;
  }
  &:first-child {
    top: 30px;
    left: 210px;
    animation: twinkle 0.4s infinite;
  }
  &:nth-child(2) {
    top: 0;
    left: 60px;
    animation: twinkle 0.5s infinite;
    &:before {
      height: 1px;
      width: 5px;
    }
    &:after {
      width: 1px;
      height: 5px;
      top: -2px;
      left: 2px;
    }
  }
  &:nth-child(3) {
    left: 250px;
    top: 220px;
    animation: twinkle 1s infinite;
  }
  &:nth-child(4) {
    left: 150px;
    top: 200px;
    animation: twinkle 0.5s ease infinite;
  }
  &:nth-child(5) {
    left: 170px;
    top: 100px;
    animation: twinkle 0.4s ease infinite;
  }
  &:nth-child(6) {
    left: 250px;
    top: 100px;
    animation: twinkle 0.4s ease infinite;
  }
  &:nth-child(7) {
    top: 87px;
    left: 79px;
    animation: twinkle 0.2s infinite;
    &:before {
      height: 1px;
      width: 5px;
    }
    &:after {
      width: 1px;
      height: 5px;
      top: -2px;
      left: 2px;
    }
  }
  @keyframes twinkle {
  80% {
    transform: scale(1.1);
    opacity: 0.3;
  }
}
  } */
`;

export const Moon = styled.div`
 
    
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
      text-shadow: 0 0 30px rgba(82, 0, 255, 0.55), 0 0 60px rgba(82, 0, 255, 0.4), 0 0 110px rgba(82, 0, 255, 0.2),
        0 0 100px rgba(82, 0, 255, 0.1);
    }
    85% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(82, 0, 255, 0.55), 0 0 60px rgba(82, 0, 255, 0.4), 0 0 110px rgba(82, 0, 255, 0.2),
        0 0 100px rgba(82, 0, 255, 0.1);
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
      text-shadow: 0 0 30px rgba(82, 0, 255, 0.6), 0 0 60px rgba(82, 0, 255, 0.45), 0 0 110px rgba(82, 0, 255, 0.25),
        0 0 100px rgba(82, 0, 255, 0.1);
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(82, 0, 255, 0.6), 0 0 60px rgba(82, 0, 255, 0.45), 0 0 110px rgba(82, 0, 255, 0.25),
        0 0 100px rgba(82, 0, 255, 0.1);
    }
  }
`;
