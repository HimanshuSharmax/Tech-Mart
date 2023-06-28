import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Context/filter_context";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}>
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd column  */}
      <div className="product-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style sort-select--option"
            onClick={sorting}>
            <option value="highest">Price: Highest</option>
            <option value="lowest">Price: Lowest</option>            
            <option value="a-z">Name:  A-Z</option>
            <option value="z-a">Name:  Z-A</option>
          </select>
        </form>
      </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  align-items: center;

  p{
    font-weight:600;
  }

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    cursor: pointer;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    border: 0px;
    border-radius: 4px;
    padding: 0.7rem 0.9rem;

    .sort-select--option {
      padding: 0.7rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 4rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}){
    p{
    font-weight:600;
    }
    .sort-selection .sort-selection--style {
      padding: 0.6rem 0.7rem;
      font-size:1.4rem;
    }
    .sorting-list--grid {
      gap: 1.2rem;
      }
  }
`;

export default Sort;