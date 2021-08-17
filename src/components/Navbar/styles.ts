import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 79px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: transparent;

  li {
    font-family: ${({ theme }) => theme.fonts['secondary']};
    font-weight: bold;

    color: ${({ theme }) => theme.colors['gray-60']};
    font-size: 18px;
  }
  
`;

export const Primary = styled.div`
  display: flex;
  
  li {
    margin-left: 64px;
  }
  
`;

export const Secundary = styled.img.attrs({
  src: 'logo.png'
})`
  width: 53px;
`;

export const Tertiary = styled.div`
  display: flex;

   
  li {
    margin-right: 64px;
  }
`;