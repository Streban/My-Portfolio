import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }
  
  .hero-image{
    img{
      max-width: 500px;
      transform: scaleX(-1);
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  .rotating-text {
    display: inline-block;
    position: relative;
    height: 1em;
    overflow: hidden;
    color: #00ff88;
  }

.rotating-text span {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  animation: rotate 6s infinite;
  opacity: 0;
}

// .rotating-text span:nth-child(1) {
//   animation-delay: 0s;
// }
.rotating-text span:nth-child(2) {
  animation-delay: 2s;
}
// .rotating-text span:nth-child(3) {
//   animation-delay: 2s;
// }

// @keyframes rotate {
//   0% {
//     opacity: 0;
//     transform: rotateX(-90deg);
//   }
//   25% {
//     opacity: 1;
//     transform: rotateX(0deg);
//   }
//   75% {
//     opacity: 1;
//     transform: rotateX(0deg);
//   }
//   100% {
//     opacity: 0;
//     transform: rotateX(90deg);
//   }
// }
  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`



