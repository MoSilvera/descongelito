import React, { Component } from 'react'



export default class ContactCard extends Component {


    render() {

        return (

            <section className="contactCard">
            this is the contactcard page
            <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push("/contacts/3/info")
                    }
                }>
                    Info
                    </button>
              </section>
        )
    }
}