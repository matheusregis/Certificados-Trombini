import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import { ButtonAdd, BoxUl, BoxLi, BoxP } from '../../styles/global';


function Company() {
  const [companies, setCompanies] = useState(null);
  <Company setCompanies={setCompanies}/>
  return (
    <PageDefault>
      <React.Fragment>
        <BoxUl>
          {companies && companies.map((company, indice) => (
            <BoxLi key={`${company}${indice}`}>
              <BoxP>{company.name}</BoxP>
            </BoxLi>
          ))}
          <ButtonAdd as={Link} to="/companies/cadastro"></ButtonAdd>
        </BoxUl>
      </React.Fragment>
    </PageDefault>
  );
}

export default Company;