import React, { Component } from 'react'
import ContactCard from "./ContactCard"



export default class ContactList extends Component {


    render() {

        return (

            <section className="contact list">
            this is the contact List page
            <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push("/contacts/add")
                    }
                }>
                    Add Contact
                    </button>
            <ContactCard key="1" users={this.props.users} {...this.props}/>
              </section>
        )
    }
}
