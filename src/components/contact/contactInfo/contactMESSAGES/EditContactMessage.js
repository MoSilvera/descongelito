import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import messageManager from "../../../../modules/resourceManager/messageManager"


export default class EditContactMessage extends Component {

    state = {
        modal: false,
        messageSubject: "",
        messageBody: "",
        email: "",
        cellNumber: "",
        contactId: "",
        userId: "",
        id: "",
        emails: this.props.emails,
        cellNumbers: this.props.cellNumbers,
        contactSelection: "",

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
    updateExistingMessage = evt => {
        let editedMessage = {}
        if (this.state.contactSelection.includes("@"))
        { editedMessage = {
            messageSubject: this.state.messageSubject,
            messageBody: this.state.messageBody,
            email: this.state.emails.find(email => email.email === this.state.contactSelection).id,
            cellNumber: "false",
            contactId: this.state.contactId,
            userId: this.state.userId,
            id: this.state.id
        }}
        else {editedMessage = {
            messageSubject: this.state.messageSubject,
            messageBody: this.state.messageBody,
            email: "false",
            cellNumber: this.state.cellNumber,
            contactId: this.state.contactId,
            userId: this.state.userId,
            id: this.state.id
        }}

        this.props.updateMessage(editedMessage)
            .then(() => this.toggle())


    }

    componentDidMount() {
        messageManager.GET(this.props.messageId)
            .then(message => {

                this.setState({
                    messageSubject: message.messageSubject,
                    messageBody: message.messageBody,
                    email: message.email,
                    cellNumber: message.cellNumber,
                    contactId: message.contactId,
                    userId: message.userId,
                    id: message.id
                });
            });
    }


    render() {


        return (

            <section className="contactMessage">
                <div>
                    <Button color="info" onClick={this.toggle}>Edit</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Edit Message</ModalHeader>
                        <ModalBody>
                            <React.Fragment>
                                <form className="message-edit">
                                    <h1>Change this message</h1>
                                    <div className="form-group">
                                        <label htmlFor="messageSubject">Subject</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="messageSubject"
                                            placeholder="Subject"
                                            value={this.state.messageSubject}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="messageBody">Message Body</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="messageBody"
                                            placeholder="What do you want to say?"
                                            value={this.state.messageBody}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact">Assign to Contact</label>
                                        <select
                                            defaultValue=""
                                            name="contactSelection"
                                            id="contactSelection"
                                            onChange={this.handleFieldChange}
                                        >
                                            <option>Pick a Contact</option>
                                            {this.state.emails.filter(email => email.contactId === parseInt(this.props.match.params.contactId))
                            .map(e =>
                                <option className="email" key={e.id} id={e.email} value={e.email}>
                                    {e.email}
                                </option>
                            )}
                            {this.state.cellNumbers.filter(cellNumber => cellNumber.contactId === parseInt(this.props.match.params.contactId))
                            .map(cellNumber => <option className="cell" key={cellNumber.id} id={cellNumber.id} value={cellNumber.id}>
                                {cellNumber.phoneNumber}
                            </option> )}
                                        </select>
                                    </div>

                                </form>
                            </React.Fragment>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.updateExistingMessage}>Save Change</Button>

                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </section>
        )
    }
}