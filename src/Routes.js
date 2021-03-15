import { BrowserRouter, Route } from 'react-router-dom'
import Login from './screens/Login'
import Cadastro from './screens/Cadastro'


function Routes () {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
    </BrowserRouter>
  );

}

export default Routes