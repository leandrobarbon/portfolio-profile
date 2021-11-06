import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;

  background: linear-gradient(180deg, #ffc222, #c80e7f, #321347);;

  margin-top: 5%;

  box-shadow: 0px 0px 200px 0px rgba(255, 194, 34, 0.3), 40px 0px 200px 10px rgba(200, 14, 127, 0.3);

  &::after {
    content: '';

    width: 250px;
    height: 250px;
    border-radius: 50%;

    box-shadow: inset 20px 0px 60px 0 rgba(245, 194, 34, 0.45), inset -20px 20px 60px 0 rgba(200, 14, 127, 0.44);

  }

  
`;

