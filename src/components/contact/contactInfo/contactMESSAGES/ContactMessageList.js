import React, { Component } from 'react'
import EditContactMessage from './EditContactMessage';
import { Card, CardTitle, Button } from "reactstrap"
import "./contactMessage.css"



export default class ContactMessageList extends Component {

    render() {

        return (

            <section className="landing">
                <div id="titleBox">
                    {this.props.contacts.filter(contact => contact.id === parseInt(this.props.match.params.contactId))
                        .map(contact => <h1 id="messageTitle" key={contact.id}>{contact.contactFirstName}'s Messages</h1>)}

                    <Button type="button"
                        className="btn justify-content-center"
                        onClick={() => {
                            this.props.history.push(`/messages/${this.props.match.params.contactId}/add`)
                        }
                        }><i className="fas fa-envelope"></i> Add Message</Button></div>
                <div id="messages">
                    {this.props.messages.filter(message => (message.contactId === parseInt(this.props.match.params.contactId)))
                        .map(message => {
                            return <Card body className="cards" key={message.id}>
                                <CardTitle>Subject:{message.messageSubject}</CardTitle>
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

