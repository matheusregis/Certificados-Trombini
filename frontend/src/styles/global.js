import styled from 'styled-components';
import LogoAdd from '../assets/img/Plus.png';

export const Main = styled.main `
  background-color: var(--blackLighter);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-right: 5%;
  padding-left: 5%;
`;

export const BoxUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
  justify-content: center;
  list-style-type: none;
  text-align: center;

`;

export const ButtonAdd = styled.a`
  background-image: url(${LogoAdd});
  border: none;
  border-radius: 34px;
  cursor: pointer;
  height: 64px;
  width: 64px;
  position: fixed;
  bottom: 120px;
  right: 50px;  
  &:hover,
  &:focus {
  opacity: .5;
  }
`;

export const FormCreate = styled.form `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

export const ButtonCreate = styled.button`
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
  margin-left: 32px;
  outline: none;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity .3s;
  
  &:hover,
  &:focus {
  opacity: .5;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 120px;

`;

export const BoxLi = styled.li `
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  margin: 16px 16px;
  border-radius: 32px 4px;
  cursor: pointer;
`;

export const BoxP = styled.p`
  color: var(--trombini);
  padding: 32px 48px;
  font-size: 20px;
  font-weight: bold;
`;