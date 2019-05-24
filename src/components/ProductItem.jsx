import React from 'react'

export default class ProductItem extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
        <div className="col-4 mt-3">
          <div className="card">
            <img src={this.props.product.image} className="card-img-top" alt="something" style={{ maxHeight: '300px' }} />
            <div className="card-body">
              <h5 className="card-title">{this.props.product.name}</h5>
              <div className="card-text row">
                <div className="col-6">
                <strong>{this.props.product.price} €</strong>
                </div>
                <div className="col-6">
                <strong>( {this.props.product.stock} ) en stock</strong>
                </div>
              </div>
              <button className="btn btn-primary" onClick={() => this.props.store.addToBasket(this.props.product)}>Ajouter au panier</button>
            </div>
          </div>
        </div>
    )
  }
}