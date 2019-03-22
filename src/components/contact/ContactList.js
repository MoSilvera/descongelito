import React, { Component } from 'react'
import ContactCard from "./ContactCard"
import "./contactList.css"
import ContactAdd from  "./ContactAdd"
import { Button } from "reactstrap"



export default class ContactList extends Component {


    render() {

        return (

            <section className="contactList">
            <div id="contactListTitle">My Contacts</div>
           <ContactAdd
                addContact={this.props.addContact}
                {...this.props}/>
            <ContactCard key="1" contacts={this.props.contacts} users={this.props.users} {...this.props}/>
              </section>
        )
    }
}
