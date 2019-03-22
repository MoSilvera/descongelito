import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class AddContactMessage extends Component {

    state = {
        modal: false,
        messageSubject: "",
        messageBody: "",
        email: "",
        contactSelection: "",
        cellNumber: "",
        contactId: "",
        userId: "",
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    constructNewMessage = evt => {
        evt.preventDefault()
        let message = {}
        if (this.state.contactSelection.includes("@")) {
            message = {
                messageSubject: this.state.messageSubject,
                messageBody: this.state.messageBody,
                email: this.props.emails.find(email => email.email === this.state.contactSelection).id,
                cellNumber: "false",
                contactId: parseInt(this.props.match.params.contactId),
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
        }
        else {
            message = {
                messageSubject: this.state.messageSubject,
                messageBody: this.state.messageBody,
                email: "false",
                cellNumber: parseInt(this.state.contactSelection),
                contactId: parseInt(this.props.match.params.contactId),
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
        }

        this.props
            .addMessage(message)
            .then(() => this.toggle())

    }

    render() {
        return (
            <section className="contactMessage">
                <div>
                    <Button onClick={this.toggle}><i className="fas fa-envelope"></i> Add Message</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add Message</ModalHeader>
                        <ModalBody>
                            <React.Fragment>
                                <form className="contact-add">

                                    <div className="form-group">
                                        <label htmlFor="messageSubject">Subject</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="messageSubject"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="messageBody">Message Body</label>
                                        <textarea
                                            type="text"
                                            row="7"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="messageBody"
                                            placeholder="What do you want to say?"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact">Assign to Contact</label>
                                        <select
                                            className="form-control"
                                            defaultValue=""
                                            name="contactSelection"
                                            id="contactSelection"
                                            onChange={this.handleFieldChange}
                                        >
                                            <option>Pick a Contact</option>
                                            {this.props.emails.filter(email => email.contactId === parseInt(this.props.match.params.contactId))
                                                .map(e =>
                                                    <option className="email" key={e.id} id={e.email} value={e.email}>
                                                        {e.email}
                                                    </option>
                                                )}
                                            {this.props.cellNumbers.filter(cellNumber => cellNumber.contactId === parseInt(this.props.match.params.contactId))
                                                .map(cellNumber => <option className="cell" key={cellNumber.id} id={cellNumber.id} value={cellNumber.id}>
                                                    {cellNumber.phoneNumber}
                                                </option>)}
                                        </select>
                                    </div>
                                </form>
                            </React.Fragment>

                        </ModalBody>
                        <ModalFooter>
                            <Button 
                            onClick={this.constructNewMessage}>Save Change</Button>

                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </section>
        )
    }
}