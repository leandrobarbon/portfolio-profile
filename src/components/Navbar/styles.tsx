import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  box-shadow: 5px 0px 20px 1px rgba(82, 0, 255, 0.9);

  position: fixed;

  background: ${({ theme }) => theme.colors['black-100']}; */

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

  /* .main-container{
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color:rgba(0,0,0,0.3);
} */

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

// export const HeadNav = styled.div`

//   @media (max-width: 768px) {
//     width: 100vw;
//     display: flex;
//     justify-content: space-around;
//   }
// `;

export const Logo = styled.img.attrs({
  src: 'logo.png',
})`
  width: 53px;
  display: flex;
  justify-self: center;

  @media (max-width: 768px) {

  }
`;

// export const IconClose = styled.button`
//   display: flex;
//   align-items: center;

//   background: transparent;
//   border: none;

//   cursor: pointer;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// export const Navigation = styled.div`
//   li {
//     text-align: center;
//     margin-bottom: 32px;

//     background: transparent;

//     font-family: ${({ theme }) => theme.fonts['secondary']};
//     font-weight: bold;

//     color: ${({ theme }) => theme.colors['gray-60']};
//     font-size: 18px;
//   }

//   .home {
//     text-align: center;
//     /* color: ${({ theme }) => theme.colors['white-light']};
//     background: url('https://i.imgur.com/bYSnuNE.jpg?1');
//     background-size: cover;
//     border: 2px solid #000;
//     border-radius: 50%;
//     animation: rotate 15s linear 0s infinite;
//     box-shadow: 0 0 25px RGBA(255, 255, 255, 0.1), -8px -8px 15px gray inset, 2px 2px 25px gray inset,
//       -45px -45px 25px RGBA(0, 0, 0, 0.1) inset, 25px 25px 45px RGBA(0, 0, 0, 0.1) inset;
//     transform: rotateX(6deg) rotateY(6deg) rotateZ(6deg); */
//   }

//   @keyframes rotate {
//     0% {
//       background-position: 0 0;
//     }
//     100% {
//       background-position: 200px 0;
//     }
//   }
// `;

// export const RedeSocial = styled.div`
//   display: flex;
//   flex-direction: column;

//   margin-bottom: 18px;

//   a {
//     margin-bottom: 24px;
//   }
// `;

// export const Toggle = styled.button`
//   width: 100%;
//   display: flex;
//   justify-content: flex-end;
//   padding: 16px 16px 0;
//   border: none;

//   background: #000;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;
