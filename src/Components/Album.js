import React, { Component } from 'react'

export default class Album extends Component {

    constructor() {
        super();

        this.state = {
            editable: false,
            currentAlbum2: "",
        }
    }

    //update album's name function (Dummy request) 
    updateAlbum = async (id) => {

        this.setState({
            editable: true,
        })

        if (this.state.currentAlbum2 !== "") {

            let response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: 1,
                    title: this.state.currentAlbum2,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            let data = await response.json();

            console.log(data);
            alert("Album updated");
            this.setState({
                editable: false,
            })

        }
        

    }

    //handle's the change in the input box for album's name and updates it to "currentAlbum2" state.
    handleChange = (e) => {
        this.setState({
            currentAlbum2: e.target.value,
        })
       
    }




    render() {
        const { song } = this.props;

        return (
            <>
                <div className='container'>
                    <div className='row ms-auto' >
                        {
                            <div className="card col-12 m-2"  >
                                <div className="card-body bg-dark">

                                    {/* conditional rendering  */}
                                    {this.state.editable ? <input type="text" onChange={this.handleChange} placeholder={song.title} style={{ width: "300"}} ></input> : <h5 className="card-title fs-3 text-white">{song.title}</h5>}

                                    <button type="button" className="btn btn-success mb-2 ms-3 px-4 fs-5" onClick={() => { this.updateAlbum(song.id) }}> Update </button>
                                    <button type="button" className="btn btn-danger mb-2 px-4 ms-3 fs-5" onClick={() => { this.props.deleteAlbum(song.id) }} >Delete</button>

                                </div>
                            </div>
                        }
                    </div>
                </div>
            </>
        )
    }
}


