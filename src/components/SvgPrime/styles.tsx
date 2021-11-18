import styled from 'styled-components';


export const Container = styled.div`
 display: flex;
  justify-content: center;
  width: 100%;
  margin-top:200px;

  @media (max-width: 800px) {
    margin-top:0;
  }

  .testando{
    animation: move 0.3s linear infinite both
  }

  @keyframes move{0%,100%{transform:translateX(0)}10%,30%,50%,70%{transform:translateX(-10px)}20%,40%,60%{transform:translateX(10px)}80%{transform:translateX(8px)}90%{transform:translateX(-8px)}}


  .shake-vertical{
    animation: moveVertical 0.3s cubic-bezier(.455,.03,.515,.955) infinite both
  }

  @keyframes moveVertical{0%,100%{transform:translateY(0)}10%,30%,50%,70%{transform:translateY(-8px)}20%,40%,60%{transform:translateY(8px)}80%{transform:translateY(6.4px)}90%{transform:translateY(-6.4px)}}

  .flicker-5{animation:flicker-in-2 2s linear infinite  both}

  @keyframes flicker-in-2{0%{opacity:0}10%{opacity:0;box-shadow:none}10.1%{opacity:1;box-shadow:none}10.2%{opacity:0;box-shadow:none}20%{opacity:0;box-shadow:none}20.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.25)}20.6%{opacity:0;box-shadow:none}30%{opacity:0;box-shadow:none}30.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.5%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.6%{opacity:0;box-shadow:none}45%{opacity:0;box-shadow:none}45.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}50%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55.1%{opacity:0;box-shadow:none}57%{opacity:0;box-shadow:none}57.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.3)}60%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.3)}60.1%{opacity:0;box-shadow:none}65%{opacity:0;box-shadow:none}65.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.3),0 0 100px rgba(255,255,255,.1)}75%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.3),0 0 100px rgba(255,255,255,.1)}75.1%{opacity:0;box-shadow:none}77%{opacity:0;box-shadow:none}77.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85.1%{opacity:0;box-shadow:none}86%{opacity:0;box-shadow:none}86.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}100%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}}`;
