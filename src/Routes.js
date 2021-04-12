import { BrowserRouter, Route } from 'react-router-dom';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Carrinho from './screens/Carrinho';
import Home from './screens/Home';
import RecuperarSenha from './screens/RecuperarSenha';
import Descricao from './screens/Descricao';

function Routes () {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}  exact/>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/carrinho" component={Carrinho} />
      <Route path="/recuperarsenha" component={RecuperarSenha} />
      <Route path="/descricao" component={Descricao} />
    </BrowserRouter>
  );

}

export default Routes