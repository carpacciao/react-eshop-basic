import React, {Fragment} from 'react'

import dragibus from '../images/dragibus.jpg'
import grenade from '../images/grenade.jpg'
import napoleon from '../images/napoleon.jpg'
import fruitella from '../images/fruitella.jpg'


export default class ProductItem extends React.Component {
  render () {
    return (
      <Fragment>
        <div className="col-4 mt-3">
          <div className="card">
            <img src={dragibus} className="card-img-top" alt="something" style={{ maxHeight: '300px' }} />
            <div className="card-body">
              <h5 className="card-title">Dragibus</h5>
              <div className="card-text row">
                <div className="col-6">
                  <strong>1.50 €</strong>
                </div>
                <div className="col-6">
                  <strong>( 7 ) en stock</strong>
                </div>
              </div>
              <button className="btn btn-primary">Ajouter au panier</button>
            </div>
          </div>
        </div>

        <div className="col-4 mt-3">
          <div className="card">
            <img src={grenade} className="card-img-top" alt="something" style={{ maxHeight: '300px' }} />
            <div className="card-body">
              <h5 className="card-title">Grenade</h5>
              <div className="card-text row">
                <div className="col-6">
                  <strong>1.95 €</strong>
                </div>
                <div className="col-6">
                  <strong>( 2 ) en stock</strong>
                </div>
              </div>
              <button className="btn btn-primary">Ajouter au panier</button>
            </div>
          </div>
        </div>

        <div className="col-4 mt-3">
          <div className="card">
            <img src={napoleon} className="card-img-top" alt="something" style={{ maxHeight: '300px' }} />
            <div className="card-body">
              <h5 className="card-title">Napoleon</h5>
              <div className="card-text row">
                <div className="col-6">
                  <strong>2.49 €</strong>
                </div>
                <div className="col-6">
                  <strong>( 12 ) en stock</strong>
                </div>
              </div>
              <button className="btn btn-primary">Ajouter au panier</button>
            </div>
          </div>
        </div>

        <div className="col-4 mt-3">
          <div className="card">
            <img src={fruitella} className="card-img-top" alt="something" style={{ maxHeight: '300px' }} />
            <div className="card-body">
              <h5 className="card-title">Fruitella</h5>
              <div className="card-text row">
                <div className="col-6">
                  <strong>0.60 €</strong>
                </div>
                <div className="col-6">
                  <strong>( 21 ) en stock</strong>
                </div>
              </div>
              <button className="btn btn-primary">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}