import { BrowserRouter, Route } from 'react-router-dom'
import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import Carrinho from './screens/Carrinho'
import Home from './screens/Home'


function Routes () {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}  exact/>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/carrinho" component={Carrinho} />
    </BrowserRouter>
  );

}

export default Routes