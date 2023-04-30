import styled from "styled-components";

const Container = styled.div`
  & {
    width: 100vw;
    height: 100vh;
  }

  &.dark {
    background: var(--darkBlue);
  }

  &.light {
    background: var(--white);
  }
`;

export default Container;
