import React from 'react';
import { FooterBase, LogoTrombini, FooterParagraph } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <FooterParagraph>
        Direitos reservados a 
        {' '}
        <LogoTrombini src={Logo} alt="Logo Trombini" />
      </FooterParagraph>
    </FooterBase>
  );
}

export default Footer;
