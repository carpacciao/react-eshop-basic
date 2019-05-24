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
        <Navigation store={this.store} />
        <ShopList store={this.store} />
      </div>
    )
  }
}
export default App;
