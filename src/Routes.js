import { BrowserRouter, Route } from 'react-router-dom'
import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import Home from './screens/Home'
import EsqueciSenha from './screens/EsqueciSenha';


function Routes () {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}  exact/>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/esquecisenha" component={EsqueciSenha} />
    </BrowserRouter>
  );

}

export default Routes