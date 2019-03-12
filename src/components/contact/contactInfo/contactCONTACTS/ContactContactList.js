import React, { Component } from 'react'
import ContactEmailCard from "./ContactEmailCard"
import ContactEmailPhoneCard from "./ContactPhoneCard"



export default class ContactContactList extends Component {


    render() {

        return (

            <section className="contactContactList">
           this is the contact contact list page 
           <ContactEmailCard />
           <ContactEmailPhoneCard />
              </section>
        )
    }
}