import styled from "styled-components";

const Container = styled.div`
  & {
    font-family: "Nunito", sans-serif;
    font-weight: bolder;
    font-size: 2rem;
    padding: 5px 20px;
    border-radius: 5px;
    padding-left: 15px;
    background: #0033cc;
    cursor: pointer;
    transition: 0.5s;
  }

  &.landin-img:hover {
    box-shadow: none;
  }

  .logo {
    color: white;
  }
`;

export default Container;
