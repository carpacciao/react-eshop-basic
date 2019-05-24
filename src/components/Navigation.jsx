import React from 'react'

export default class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      store: this.props.store,
      price: this.getPrice()
    }
    this.props.store.subscribe((store) => {
      this.setState({price: this.getPrice(), store: store})
    })
  }
  getPrice () {
    let price = 0;
    this.props.store.basket.forEach(p => {
      price += p.price
    })
    return price.toFixed(2)
  }
  render () {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" href="#1">
          E-shop
        </span>
        <span className="nav-item nav-link text-white" href="#2"><strong>( {this.state.store.basket.length} )</strong> article(s) : <strong>{this.state.price} €</strong></span>
      </nav>
    )
  }
}