import React, { Component } from 'react'
import EditContactMessage from './EditContactMessage';
import { Button } from "reactstrap"
import "./contactMessage.css"



export default class ContactMessageList extends Component {

    render() {

        return (

            <section className="landing">
                <div>
                {this.props.contacts.filter(contact => contact.id === parseInt(this.props.match.params.contactId))
                .map(contact => <h1 id="messageTitle" key={contact.id}>{contact.contactFirstName}'s Messages</h1>)}
                <div className="add">
                <Button type="button"
                    className="btn justify-content-center"
                    onClick={() => {
                        this.props.history.push(`/messages/${this.props.match.params.contactId}/add`)
                    }
                    }><i class="fas fa-envelope"></i> Add Message</Button></div> </div>
                    <div id="messages">
                {this.props.messages.filter(message => (message.contactId === parseInt(this.props.match.params.contactId)))
                    .map(message => {
                        return <React.Fragment key={message.id}>Subject:{message.messageSubject}
                            <EditContactMessage
                                messageId={message.id}
                                emails={this.props.emails}
                                cellNumbers={this.props.cellNumbers}
                                updateMessage={this.props.updateMessage}
                                {...this.props}/>
                              <span> <Button className="btn"
                                onClick={() => this.props.deleteMessage(message.id)}><i class="fas fa-trash-alt"></i> Delete</Button></span>
                                </React.Fragment>
                    })}
                    </div>
            </section>
        )
    }
}

