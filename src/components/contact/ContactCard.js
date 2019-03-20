import React, { Component } from 'react'
import "./contactList.css"
import { Button } from "reactstrap"


export default class ContactCard extends Component {


    render() {

        return (

            <section className="oneCardSection">
           {this.props.contacts.filter(contact => contact.userId === Number(sessionStorage.getItem("credentials")))
            .map(contact =>
                <div key={contact.id} className="contactCard card">
                    <div className="card-body">
                        <h2 className="h2"><i class="fas fa-users"></i></h2>
                        <h5 className="card-title">
                            {contact.contactFirstName} {contact.contactLastName}
                            <br></br>
                        </h5>
                   </div>
                   <Button type="button"
                    className="btn justify-content-center"
                    onClick={() => {
                        this.props.history.push(`/contacts/${contact.id}/info`)
                    }
                }>
                  <h3><i class="fas fa-info-circle"></i></h3>
                    </Button>
                </div>
            )

        }
              </section>
        )
    }
}

