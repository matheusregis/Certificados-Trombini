import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { FormCreate, ButtonCreate } from '../../../styles/global';

function CreateCompany( {companies, setCompanies} ) {
  
  const [values, setValues] = useState({});

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    )
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCompanies([
      ...companies,
      values,
    ]);
  }

  return (
    <PageDefault>
      <FormCreate onSubmit={handleSubmit}>
        <FormField
          label="Nome da Empresa: "
          type="text"
          name="name"
          value={values.name}
          onChange = {handleChange}
        />
        <ButtonCreate as={Link} to='/'>Cadastrar</ButtonCreate>
      </FormCreate>
    </PageDefault>
  );
}

export default CreateCompany;