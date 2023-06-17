import styled from "styled-components";

const Container = styled.div`
  & {
    margin: auto;
    height: 90vh;
    width: 90vw;
    color: black;
    display: flex;
    flex-direction: column;
    font-family: "Nunito", sans-serif;
  }

  .navbar {
    font-weight: bolder;
  }

  .navbar,
  .container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .container {
    margin-top: 7rem;
  }

  img {
    height: 20rem;
    border-radius: 5px;
  }

  a {
    margin: 0 7px;
    transition: 0.2s;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 3px solid;
  }

  .active {
    color: #0033cc;
  }

  p {
    margin-top: 5rem;
  }

  button {
    padding: 20px;
    color: black; 
  }
`;

export default Container;
