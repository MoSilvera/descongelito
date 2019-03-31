import React, { Component } from 'react'
import EditContactEmail from "./EditContactEmail"
import {Button, Card, CardTitle} from 'reactstrap'



export default class ContactEmailCard extends Component {


    render() {

        return (

            <Card className="ContactAddresses">
            { this.props.emails.filter( email => email.contactId === parseInt(this.props.match.params.contactId))
            .map(email =>
            <div key={email.id}>
            <CardTitle>{email.email}</CardTitle>
             <span>
            <EditContactEmail emailId={email.id} updateEmail={this.props.updateEmail} />
             <Button
                                onClick={() => this.props.deleteEmail(email.id)}
                                className="btn"><i className="fas fa-trash-alt"></i> Delete</Button>
             </span>
             </div>) }
            </Card>
        )
    }
}