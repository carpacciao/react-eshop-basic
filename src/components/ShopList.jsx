import React from 'react'
import ProductItem from './ProductItem'

export default class ShopList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: this.props.store.products
    }
    this.props.store.subscribe(store => {
      this.setState({products: store.products})
    })
  }
  render () {
    return (
      <div className="container mt-5">
        <div className="row">
        {
          this.state.products.map((product) => {
            return (
              <ProductItem product={product} key={product.id} store={this.props.store} />
            )
          })
        }
        </div>
      </div>
    )
  }
}