import React from 'react';
import ProductStore from './stores/ProductStore'

import Navigation from './components/Navigation'
import ShopList from './components/ShopList'

class App extends React.Component {
  constructor () {
    super()
    this.store = new ProductStore()
  }
  render () {
    return (
      <div>
        <Navigation />
        <ShopList />
      </div>
    )
  }
}
export default App;
