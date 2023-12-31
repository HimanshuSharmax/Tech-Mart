import { useProductContext } from "../Context/productContext";
import styled from "styled-components";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: #e2f1fe;

  .container {
    max-width: 120rem;
  }
  .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
      font-size:1.6rem;
    }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 100%;
      height: 23rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .common-heading{
      margin-bottom: 3rem;
   }

  .card {
    background-color: #ffffff8f;
    border-radius: 1rem;
    padding-bottom: 0.05rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      font-weight: 600;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
      font-weight: 600;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}){
   .intro-data{
      margin-top:3rem;
   }
   .common-heading{
      margin-bottom: 3rem;
   }

   .card{
      margin-bottom: 4rem;
   }
   
  .card h3{
    font-size: 2rem;
  }

  .card .card-data--price{
    font-size: 2rem;

  }

   figure img {
    max-width: 100%;
    height: 30rem;
    transition: all 0.2s linear;
  }
`;

export default FeatureProduct;