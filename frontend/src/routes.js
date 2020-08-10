import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { H1 } from './styles/global'

import Company from './pages/Company';
import createCompany from './pages/Company/cadastro';

const Page404 = () => (<H1>Página 404</H1>)

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Company} exact/>
      <Route path="/companies/cadastro" component={createCompany} exact/>
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
  );
}