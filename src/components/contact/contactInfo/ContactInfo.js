import React, { Component } from 'react'
import "./contactInfo.css"
import ContactEdit from "./ContactEdit"
import { Button } from "reactstrap"

export default class ContactInfo extends Component {


    render() {

        let oneContact = () => {
            return this.props.contacts.filter(contact => (contact.id === parseInt(this.props.match.params.contactId)))
                .map(contact => { return <React.Fragment key={contact.id}>{contact.contactFirstName} {contact.contactLastName}</React.Fragment> })
        }

        let oneContactFirstName = () => {
            return this.props.contacts.filter(contact => (contact.id === parseInt(this.props.match.params.contactId)))
                .map(contact => { return <React.Fragment key={contact.id}>{contact.contactFirstName}</React.Fragment> })
        }


        return (

            <section className="contactInfo">
                <h1 className="contactName">{oneContact()} </h1>

                <Button type="button"
                    className="btn justify-content-center"
                    onClick={() => {
                        this.props.history.push(`/contacts/${this.props.match.params.contactId}/info/contacts`)
                    }
                    }>
                    <h2><i className="fas fa-address-card"></i> Adress book</h2>
                </Button>
                <Button type="button"
                    className="btn justify-content-center"
                    onClick={() => {
                        this.props.history.push(`/contacts/${this.props.match.params.contactId}/info/messages`)
                    }
                    }>
                    <h2><i className="fas fa-envelope"></i>  Messages</h2>
                </Button>
                <div id="editDelete">
                    <Button
                    onClick={() => this.props.deleteContact(this.props.match.params.contactId)
                    }
                    className="btn edDel"><i className="fas fa-trash-alt"></i> Delete
                    </Button>
                    <ContactEdit
                        updateContact={this.props.updateContact}
                        {...this.props}
                    />
                </div>
            </section>
        )
    }
}