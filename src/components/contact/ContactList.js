import React, { Component } from 'react'
import ContactCard from "./ContactCard"
import "./contactList.css"
import { Button } from "reactstrap"



export default class ContactList extends Component {


    render() {

        return (

            <section className="contactList">
            <Button type="button"
                    className="btn justify-content-center"
                    onClick={() => {
                        this.props.history.push("/contacts/add")
                    }
                }>
                    <h2><i class="fas fa-user-plus"></i></h2>
                    </Button>
            <ContactCard key="1" contacts={this.props.contacts} users={this.props.users} {...this.props}/>
              </section>
        )
    }
}
