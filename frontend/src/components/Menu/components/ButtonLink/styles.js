import styled from 'styled-components';

const ButtonLink = styled.a`
  background: var(--grayMedium);
  border: 1px solid var(--trombini);
  border-radius: 5px;
  box-sizing: border-box;
  color: var(--trombini);
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  outline: none;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity .3s;
  
  &:hover,
  &:focus {
  opacity: .5;
  }
`;

export default ButtonLink;