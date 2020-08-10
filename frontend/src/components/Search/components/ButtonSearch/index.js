import React from 'react';
import ButtonSearch  from './styles';

function Button({ className, children }) {
  return (
    <ButtonSearch className={className}>
      {children}
    </ButtonSearch>
  );
}

export default Button;