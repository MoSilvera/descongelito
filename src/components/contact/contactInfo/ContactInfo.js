import React, { Component } from 'react'
import "./contactInfo.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import contactManager from "../../../modules/resourceManager/contactManager"


export default class ContactInfo extends Component {

    state = {
        modal: false,
        contactFirstName: "",
        contactLastName: "",
        id: "",
        userId: "",

    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    updateExistingContact = evt => {

        const editedContact = {
            id: this.state.id,
            contactFirstName: this.state.contactFirstName,
            contactLastName: this.state.contactLastName,
            userId: this.state.userId
        };

        this.props.updateContact(editedContact)
            .then(() => this.props.history.push(`/contacts/${this.props.match.params.contactId}/info`)
            )
        this.toggle()

    }

    componentDidMount() {
        contactManager.GET(this.props.match.params.contactId)
            .then(contact => {
                this.setState({
                    contactFirstName: contact.contactFirstName,
                    contactLastName: contact.contactLastName,
                    userId: parseInt(sessionStorage.getItem("credentials")),
                    id: contact.id
                });
            });
    }

    render() {

        let oneContact = () => {
            return this.props.contacts.filter(contact => (contact.id === parseInt(this.props.match.params.contactId)))
                .map(contact => { return <React.Fragment key={contact.id}>{contact.contactFirstName} {contact.contactLastName}</React.Fragment> })
        }

        let selectedContact = () => { return this.props.contacts.find(contact => contact.id === parseInt(this.props.match.params.contactId)) }

        return (

            <section className="contactInfo">
                <h1>{oneContact()} </h1>

                <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push(`/contacts/${this.props.match.params.contactId}/info/contacts`)
                    }
                    }>
                    Adress book
                    </button>
                <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push(`/contacts/${this.props.match.params.contactId}/info/messages`)
                    }
                    }>
                    {oneContact()}'s Messages
                    </button>
                <button
                    onClick={() => this.props.deleteContact(this.props.match.params.contactId)
                        .then(this.props.history.push("/contacts"))}
                    className="btn btn-danger">Delete</button>
                <div>
                    <Button color="info" onClick={this.toggle}>Edit Contact</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Change Contact Name</ModalHeader>
                        <ModalBody>
                            <div>

                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="contactFirstName"
                                    placeholder="First Name"
                                    value={this.state.contactFirstName}
                                />

                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="contactLastName"
                                    placeholder="Last Name"
                                    value={this.state.contactLastName}
                                />
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.updateExistingContact}>Save Change</Button>

                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </section>
        )
    }
}