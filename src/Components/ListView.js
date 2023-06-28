import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <NavLink to={`/singleproduct/${id}`}>
            <div className="card grid grid-two-column">
              <figure>
                <img src={image} alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p className="price">
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 90)}...</p>

                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;
  p{
    font-weight: 600;
  }
  .price{
    color:#3b4eff;
  }

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
      background-color: rgba(0, 0, 0, 0.5);
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
      max-width: 90%;
      margin-top: 0.5rem;
      height: 20rem;
      transition: all 0.2s linear;
      border-radius: 7px;
    }
  }

  .card {
    ${'' /* border: 0.1rem solid rgb(26 23 111 / 29%); */}
    border-radius: 10px;
    background-color: #ffffff3d;

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 600;
      font-size: 2.4rem;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid #1600ff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-weight: 600;
      border-radius: 8px;

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

    .btn-main .btn:hover {
      color: #fff;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}){
    figure img{
      margin-top:2rem;
    }
  }
`;

export default ListView;