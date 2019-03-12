import React, { Component } from 'react'



export default class ContactInfo extends Component {


    render() {

        return (

            <section className="contactInfo">
            this is the contact info page
            <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push("/contacts/1/edit")
                    }
                }>
                   Edit
                    </button>
              </section>
        )
    }
}