import styled from 'styled-components';
import LogoSearch from '../../../../assets/img/Search.png';

const ButtonSearch = styled.button`
  background-image: url(${LogoSearch});
  border: none;
  border-radius: 10px;
  cursor: pointer;
  height: 64px;
  width: 64px;
  
  &:hover,
  &:focus {
  opacity: .5;
  }
`;

export default ButtonSearch;