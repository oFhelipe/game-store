import { BrowserRouter, Route } from 'react-router-dom'
import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import Home from './screens/Home'
import RecuperarSenha from './screens/RecuperarSenha';


function Routes () {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}  exact/>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/recuperarsenha" component={RecuperarSenha} />
    </BrowserRouter>
  );

}

export default Routes