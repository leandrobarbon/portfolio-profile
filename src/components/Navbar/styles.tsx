import styled from 'styled-components';

export const Container = styled.div`

  .navbar {
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 5px 0px 20px 1px rgba(82, 0, 255, 0.9);
    background: ${({ theme }) => theme.colors['black-100']};

    position: fixed;
  }

  .nav-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: center;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
  }

  .nav-links {
    color: gray;
    line-height: 64px;
  }

  .nav-links:after {
    content: '';
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }

  .nav-links:hover {
    color: ${({ theme }) => theme.colors['purple-led']};
  }

  .social {
    display: flex;
    flex-direction: column;

    a {
      margin-bottom: 36px;
    }
  }
  
  .nav-icon {
    display: none;
  }

  @media (max-width: 768px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-top: 1pxsolid #fff;
      position: absolute;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
   
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #551a8b;
    }
    
    .social {
      
    }
  }
`;

export const Logo = styled.img.attrs({
  src: 'logo.png',
})`
  width: 53px;
  display: flex;
  justify-self: center;

  @media (max-width: 768px) {

  }
`;


