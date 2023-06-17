import styled from "styled-components";

const Container = styled.div`
  & {
    width: 100vw;
    height: 100vh;
  }

  &.dark * {
  }

  &.light * {
  }

  &.dark {
    background: var(--darkblue);
  }

  &.light {
    background: var(--paleBlue);
  }

  &.light .landin-img {
    box-shadow: 8px 9px 16px 0px hsl(236deg 55.08% 75.11%);
  }

  &.dark .landin-img {
    box-shadow: 8px 9px 16px 0px rgb(5 9 51);
  }
`;

export default Container;
