import { BrowserRouter, Route } from 'react-router-dom'
import Login from './screens/Login'


function Routes () {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );

}

export default Routes