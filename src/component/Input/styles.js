import styled from "styled-components";

const SInput = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px 5px;

  &:focus {
    outline: none;
    border-color: #1877f2;
  }

  &::placeholder {
    font-size: 15px;
  }
`;

export default SInput;
