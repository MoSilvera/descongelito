import React, { Component } from 'react'
import "./contactList.css"



export default class ContactCard extends Component {


    render() {

        return (

            <section className="card contactCard">
           {this.props.contacts.filter(contact => contact.userId === Number(sessionStorage.getItem("credentials")))
            .map(contact =>
                <div key={contact.id} className="contact">
                    <div className="card-body">
                        <h5 className="card-title">
                            {contact.contactFirstName} {contact.contactLastName}
                            <br></br>
                        </h5>
                   </div>
                   <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push(`/contacts/${contact.id}/info`)
                    }
                }>
                    Info
                    </button>
                </div>
            )

        }
              </section>
        )
    }
}

