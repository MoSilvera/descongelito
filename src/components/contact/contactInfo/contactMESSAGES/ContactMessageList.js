import React, { Component } from 'react'
import EditContactMessage from './EditContactMessage';
import { Card, CardTitle, Button } from "reactstrap"
import AddContactMessage from "./AddContactMessage"
import "./contactMessage.css"



export default class ContactMessageList extends Component {

    render() {

        return (

            <section className="landing">
                <div id="titleBox">
                    {this.props.contacts.filter(contact => contact.id === parseInt(this.props.match.params.contactId))
                        .map(contact => <h1 id="messageTitle" key={contact.id}>{contact.contactFirstName}'s Messages</h1>)}

                    </div>
                    <div><AddContactMessage
                        contacts={this.props.contacts}
                        emails={this.props.emails}
                        cellNumbers={this.props.cellNumbers}
                        addMessage={this.props.addMessage}
                        {...this.props}/></div>
                <div id="messages">
                
                    {this.props.messages.filter(message => (message.contactId === parseInt(this.props.match.params.contactId)))
                        .map(message => {
                            return <Card body className="cards" key={message.id}>
                                <CardTitle>Subject: {message.messageSubject}</CardTitle>
                                <div className="buttonGroup">
                                    <EditContactMessage
                                        messageId={message.id}
                                        emails={this.props.emails}
                                        cellNumbers={this.props.cellNumbers}
                                        updateMessage={this.props.updateMessage}
                                        {...this.props} />
                                    <Button className="btn"
                                        onClick={() => this.props.deleteMessage(message.id)}><i className="fas fa-trash-alt"></i> Delete</Button>
                                </div>
                            </Card>
                        })}
                </div>
            </section>
        )
    }
}

