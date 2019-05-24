import React from 'react'
import ProductItem from './ProductItem'

export default class ShopList extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="container mt-5">
        <div className="row">
        {
          this.props.store.products.map((product) => {
            return (
              <ProductItem />
            )
          })
        }
        </div>
      </div>
    )
  }
}