import React from 'react';
import Button from './components/ButtonSearch'
import { Form, Input } from './styles';

function Search() {
  return (
    <Form>
      <Input type="text" placeholder="Digite a Empresa/Funcionário que deseja buscar ↗"/>
      <Button className="ButtonSearch">
      </Button>
    </Form>
  );
}

export default Search;