import React, { Component } from 'react'
import EditContactMessage from './EditContactMessage';



export default class ContactMessageList extends Component {

    render() {

        return (

            <section className="landing">
                <div>{this.props.contacts.filter(contact => contact.id === parseInt(this.props.match.params.contactId)).map(contact => <h1 key={contact.id}>{contact.contactFirstName} {contact.contactLastName}'s Messages</h1>)}<button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push(`/messages/${this.props.match.params.contactId}/add`)
                    }
                    }>Add Message</button> </div>
                {this.props.messages.filter(message => (message.contactId === parseInt(this.props.match.params.contactId)))
                    .map(message => {
                        return <div key={message.id}>Subject:{message.messageSubject}
                            <EditContactMessage
                                messageId={message.id}
                                emails={this.props.emails}
                                cellNumbers={this.props.cellNumbers}
                                updateMessage={this.props.updateMessage}
                                {...this.props}/>
                                <button className="btn btn-danger"
                                onClick={() => this.props.deleteMessage(message.id)}>Delete</button> </div>
                    })}
            </section>
        )
    }
}

