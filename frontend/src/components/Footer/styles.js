import styled from 'styled-components';

export const FooterParagraph = styled.p `
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const LogoTrombini = styled.img`
  width: 100px;
  height: 80px;
`;

export const FooterBase = styled.footer`
  background: var(--gray);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  color: var(--white);
  align-items: center;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;


