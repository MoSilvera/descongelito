import React, { Component } from 'react'



export default class ContactEmailCard extends Component {


    render() {

        return (

            <section className="contactCard">
            { this.props.emails.filter( email => email.contactId === parseInt(this.props.match.params.contactId))
            .map(email => 
            <div>
            <h5>{email.email}</h5>
               <span><button type="button"
                className="btn btn-success justify-content-center"
                onClick={() => {
                    this.props.history.push(`/email/${email.id}/edit`)
                }
                }>
                edit
             </button>
             <button
                                onClick={() => this.props.deleteEmail(email.id)}
                                className="btn btn-danger">Delete</button>
             </span>
             </div>) }
            </section>
        )
    }
}