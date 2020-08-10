import React from 'react';
import { BoxLi, BoxP,} from './styles'
import CreateCompany from '../../pages/Company/cadastro';

function CompanyList() {
  return (
      {CreateCompany.companies.map((company, indice) => (
      <BoxLi key={`${company}${indice}`}>
        <BoxP>{company.name}</BoxP>
      </BoxLi>
      ))}
  );
}

export default CompanyList;