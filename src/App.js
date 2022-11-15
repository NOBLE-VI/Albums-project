
import { Component } from 'react';
import './App.css';
import Album from './Components/Album';
import Navbar from './Components/navbar';

class App extends Component {

  constructor() {
    super();

    this.state = {
        albums: [],
        
    }
}

// fetching the json data
  componentDidMount = async () => {

    fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((json) => {

            this.setState({
                albums: json,
            });

        });

}

// delete album function 
deleteAlbum = (id) => {

  let newAlbums = this.state.albums.filter((song) => {
      return song.id !== id
  });

  this.setState({
      albums: newAlbums,
  });


  fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'DELETE',
  });
  alert("Song deleted:");


}

  render() {
    return (
      <div className="App">
        <Navbar />
        {
          this.state.albums.map((song1)=>{

            return <Album deleteAlbum = {this.deleteAlbum}  key={song1.id} song = {song1}/>

          })

        }
      </div>
    );
  }
}

export default App;
