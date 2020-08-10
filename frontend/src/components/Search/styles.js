import styled from 'styled-components';


export const Form = styled.form`
  align-items: center;
  display: flex;
`;


export const Input = styled.input `
  background-color: var(--grayMedium);
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  height: 32px;
  padding: 16px, 16px;
  margin-right: 32px;
  margin-left: 16px;
  width: 500px;

  &:focus {
    border: 1px solid var(--trombini);
    outline: var(--trombini);
  }

`;