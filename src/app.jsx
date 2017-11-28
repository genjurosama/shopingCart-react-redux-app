
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/navBar.jsx'
import Products from './containers/products.jsx'
import CartPage from './containers/cartPage.jsx'
console.log(CartPage);

const App = () =>
  <div>
    <NavBar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </div>
  </div>

export default App