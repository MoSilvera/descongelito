import React, { Component } from 'react'
import ContactEmailCard from "./ContactEmailCard"
import ContactPhoneCard from "./ContactPhoneCard"



export default class ContactContactList extends Component {


    render() {
        let oneContact = () => {return this.props.contacts.filter(contact => (contact.id === parseInt(this.props.match.params.contactId)))
            .map(contact => {return <h1 key={contact.id}>{contact.contactFirstName} {contact.contactLastName}'s Address Book</h1>})}
        return (

            <section className="contactContactList">
            <div>{oneContact()}</div>
           <ContactEmailCard
                    emails={this.props.emails}
                    {...this.props} />
                <hr></hr>
                <ContactPhoneCard
                    cellNumbers={this.props.cellNumbers}
                    carriers={this.props.carriers}
                    contacts={this.props.contacts}
                    {...this.props} />
            </section>
        )
    }
}