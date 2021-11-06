import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: 5px;
  position: absolute;
  left: 100px;
  top: 500px;
  background: linear-gradient(0deg, rgba(235, 5, 247, 1) 0%, rgba(155, 81, 224, 1) 7%);
`;

export const L = styled.div`
  offset-path: path('M20,20 C20,100 200,0 200,100');
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
`;
