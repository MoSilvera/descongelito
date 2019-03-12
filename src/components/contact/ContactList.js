import React, { Component } from 'react'
import ContactCard from "./ContactCard"



export default class ContactList extends Component {


    render() {

        return (

            <section className="contact list">
            this is the contact List page
            <ContactCard key="1" />
              </section>
        )
    }
}