import { BrowserRouter, Route } from 'react-router-dom'
import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import Carrinho from './screens/Carrinho'
import Home from './screens/Home'
import Pesquisa from './screens/Pesquisa'
import RecuperarSenha from './screens/RecuperarSenha';


function Routes () {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}  exact/>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/pesquisa" component={Pesquisa} />
      <Route path="/recuperarsenha" component={RecuperarSenha} />
      <Route path="/carrinho" component={Carrinho} />
    </BrowserRouter>
  );

}

export default Routes