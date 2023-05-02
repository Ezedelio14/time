import styled from "styled-components";

const Container = styled.div`
  & {
    width: 100vw;
    height: 100vh;
  }

  &.dark {
    background: var(--darkblue);
  }

  &.light {
    background: var(--paleBlue);
  }
`;

export default Container;
