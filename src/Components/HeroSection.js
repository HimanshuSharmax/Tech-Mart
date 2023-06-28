import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({myData}) => {
  const {name} = myData;
  return (
    <Wrapper>
        <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio.
              Shop the latest deals across Clothing, Books, Mobiles, Health and Personal Care online.
              
            </p>
            <NavLink to="/products">
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/img.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-top: 10rem;
  padding-bottom: 5rem;

img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {
  p {
    margin: 2rem 0;
    font-weight: 600;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bolder;
    font-size: 4rem;
  }

  .intro-data {
    margin-bottom: 0;
    font-size:1.7rem;
    font-weight: 600;
  }
}

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding-top: 3rem;
  padding-bottom: 3rem;
  .grid {
    gap: 5rem;
  }

  .hero-section-data .intro-data {
    font-size: 2rem;
  }

  .hero-section-data h1{
    font-size: 3.2rem;
  }

  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    background-color: rgba(81, 56, 238, 0.4);
  }
}
`;


export default HeroSection