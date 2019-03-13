import React, { Component } from 'react'
import "./contactInfo.css"


export default class ContactInfo extends Component {


    render() {

        let oneContact = () => {return this.props.contacts.filter(contact => (contact.id === parseInt(this.props.match.params.contactId)))
            .map(contact => {return <h1 key={contact.id}>{contact.contactFirstName} {contact.contactLastName}</h1>})}

        let contactID = () => {return this.props.contacts.filter(contact => (contact.id === parseInt(this.props.match.params.contactId)))}

        return (

            <section className="contactInfo">
                <div>{oneContact()} </div>
            <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push("/contacts//edit")
                    }
                    }>
                    Edit
                    </button>
                <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push(`/contacts/${this.props.match.params.contactId}/info/contacts`)
                    }
                    }>
                    Adress book
                    </button>
                <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push("/contacts/1/info/messages")
                    }
                    }>
                    Name's Messages
                    </button>
            </section>
        )
    }
}