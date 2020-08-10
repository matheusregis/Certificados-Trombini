import React from 'react';
import ButtonLink from './styles';

function Button(props) {
  return (
    <ButtonLink className={ props.className } href={ props.href }>
      {props.children}
    </ButtonLink>
  );
}

export default Button;