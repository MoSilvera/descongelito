import React, { Component } from 'react'
import ContactEmailCard from "./ContactEmailCard"
import ContactPhoneCard from "./ContactPhoneCard"
import AddContactEmail from "./AddContactEmail"
import AddContactPhone from "./AddContactPhone"
import "./addressBook.css"


export default class ContactContactList extends Component {


    render() {
        let oneContact = () => {
            return this.props.contacts.filter(contact => (contact.id === parseInt(this.props.match.params.contactId)))
                .map(contact => { return <h1 key={contact.id}>{contact.contactFirstName}'s Addresses</h1> })
        }
        return (

            <section className="contactContactList">
                <div id="title">{oneContact()}</div>
               <AddContactEmail
                contacts={this.props.contacts}
                addEmail={this.props.addEmail}
                {...this.props} />

                <ContactEmailCard

                    emails={this.props.emails}
                    deleteEmail={this.props.deleteEmail}
                    updateEmail={this.props.updateEmail}
                    {...this.props} />
                <hr></hr>
                <AddContactPhone
                    contacts={this.props.contacts}
                    addPhone={this.props.addPhone}
                    carriers={this.props.carriers}
                    {...this.props}/>
                <ContactPhoneCard
                    cellNumbers={this.props.cellNumbers}
                    carriers={this.props.carriers}
                    contacts={this.props.contacts}
                    deleteCellNumber={this.props.deleteCellNumber}
                    updateCellNumber={this.props.updateCellNumber}

                    {...this.props} />
            </section>
        )
    }
}