import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
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
      background-color: rgba(0, 0, 0, 0.3);
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
      height: 20rem;
      transition: all 0.2s linear;
      border-radius: 7px;
    }
  }

  .card {
    background-color: #ffffffba;
    border-radius: 7px;
    padding-bottom: 0.1rem;

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-data--price {
      color: #0019ff;
      font-weight: 600;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      font-weight:600;
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

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    figure img{
      height: 100%;
    }
  }

`;

export default GridView;