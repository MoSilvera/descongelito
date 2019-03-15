import React, { Component } from 'react'
import "./contactInfo.css"
import ContactEdit from "./ContactEdit"

export default class ContactInfo extends Component {


    render() {

        let oneContact = () => {
            return this.props.contacts.filter(contact => (contact.id === parseInt(this.props.match.params.contactId)))
                .map(contact => { return <React.Fragment key={contact.id}>{contact.contactFirstName} {contact.contactLastName}</React.Fragment> })
        }



        return (

            <section className="contactInfo">
                <h1>{oneContact()} </h1>

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
                        this.props.history.push(`/contacts/${this.props.match.params.contactId}/info/messages`)
                    }
                    }>
                    {oneContact()}'s Messages
                    </button>
                <button
                    onClick={() => this.props.deleteContact(this.props.match.params.contactId)
                        }
                    className="btn btn-danger">Delete</button>
                <ContactEdit
                updateContact={this.props.updateContact}
                {...this.props}
                />
            </section>
        )
    }
}