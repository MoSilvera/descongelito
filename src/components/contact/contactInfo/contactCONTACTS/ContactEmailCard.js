import React, { Component } from 'react'
import EditContactEmail from "./EditContactEmail"



export default class ContactEmailCard extends Component {


    render() {

        return (

            <section className="contactCard">
            { this.props.emails.filter( email => email.contactId === parseInt(this.props.match.params.contactId))
            .map(email =>
            <div key={email.id}>
            <h5>{email.email}</h5>
             <span>
            <EditContactEmail emailId={email.id} updateEmail={this.props.updateEmail} />
             <button
                                onClick={() => this.props.deleteEmail(email.id)}
                                className="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
             </span>
             </div>) }
            </section>
        )
    }
}