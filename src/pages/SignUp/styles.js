import styled from "styled-components";

const Container = styled.div`
  & {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .content {
    color: black;
    height: 22rem;
    width: 25rem;
    padding: 15px;
    display: flex;
    border-radius: 5px;
    background: white;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default Container;
