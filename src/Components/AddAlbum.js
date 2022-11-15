import React, { Component } from 'react'

export default class AddAlbum extends Component {

    //constructor to initialize the states.
    constructor() {
        super();

        this.state = {
            currentAlbum: "",
            isBlank: true,
        }
    }

    // Add album function
    addAlbum = async () => {
        if (this.state.currentAlbum !== "") {
            try {

                let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: this.state.currentAlbum,
                        userId: 1,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });

                let jsonData = await response.json();
                console.log(jsonData);
                
                alert("Album added");
               

            }
            catch (err) {
                console.log("Error: ", err);
            }
        }
        else {
            console.log("please enter someting..");
        }

    }

    //Handle the input change in the <input> and update it to "currentAlbum" state.
    handleChange = (e) => {

        this.setState({
            currentAlbum: e.target.value,
        })
        
    }


    render() {
        return (
            <>

                <input className="rounded-1" style={{ width: 600, height: 40, marginTop: 2, border: "3px solid skyblue" }} type="text" onChange={this.handleChange}></input>
                <button type="button" className="btn btn-primary mb-2 ms-3" onClick={this.addAlbum} >Add Album</button>

            </>
        )
    }
}
