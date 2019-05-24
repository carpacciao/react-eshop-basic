import React from 'react';

import Navigation from './components/Navigation'
import ShopList from './components/ShopList'

class App extends React.Component {
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
