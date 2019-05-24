import React from 'react'
import ProductItem from './ProductItem'

export default class ShopList extends React.Component {
  render () {
    return (
      <div className="container mt-5">
        <div className="row">

          <ProductItem />

        </div>
      </div>
    )
  }
}