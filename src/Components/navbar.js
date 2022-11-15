import React, { Component } from 'react'
import AddAlbum from './AddAlbum'

export default class navbar extends Component {
  render() {
    return (
      <>

        <nav className="navbar bg-dark">
          <h2 style={{color: "white", marginLeft: 30}}>Albums</h2>
          <div className='mx-auto d-flex'>
            <AddAlbum/>
            </div>
        </nav>

      </>
    )
  }
}
