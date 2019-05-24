import dragibus from '../images/dragibus.jpg'
import grenade from '../images/grenade.jpg'
import napoleon from '../images/napoleon.jpg'
import fruitella from '../images/fruitella.jpg'

export default class ProductStore {
  constructor () {
    this.basket = []
    this.products = []
    /* SEED */
    this.products.push({
      id: 1,
      name: 'Dragibus',
      image: dragibus,
      stock: 7,
      price: 1.50
    })
    this.products.push({
      id: 2,
      name: 'Grenade',
      image: grenade,
      stock: 2,
      price: 1.95
    })
    this.products.push({
      id: 3,
      name: 'Napoleon',
      image: napoleon,
      stock: 12,
      price: 2.49
    })
    this.products.push({
      id: 4,
      name: 'Fruitella',
      image: fruitella,
      stock: 21,
      price: 0.60
    })
    /* END SEED */

  }
  
  addToBasket (product) {
    // Ajoute au panier
    this.basket = [...this.basket, product]
    //retire 1 du stock
    this.products = this.products.map(p => p === product ? {...p, stock: p.stock - 1} : p)
  }

}