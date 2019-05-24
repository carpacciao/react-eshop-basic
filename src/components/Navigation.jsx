import React from 'react'

export default class Navigation extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" href="#1">
          E-shop
        </span>
        <span className="nav-item nav-link text-white" href="#2"><strong>( 2 )</strong> article(s) : <strong>12.35 €</strong></span>
      </nav>
    )
  }
}