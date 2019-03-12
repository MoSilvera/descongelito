import React, { Component } from 'react'
import ContactCard from "./ContactCard"
import "./contactList.css"



export default class ContactList extends Component {


    render() {

        return (

            <section className="contactList">
            <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push("/contacts/add")
                    }
                }>
                    Add Contact
                    </button>
            <ContactCard key="1" contacts={this.props.contacts} users={this.props.users} {...this.props}/>
              </section>
        )
    }
}
