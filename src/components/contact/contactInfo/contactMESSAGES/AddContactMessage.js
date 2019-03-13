import React, { Component } from 'react'



export default class AddContactMessage extends Component {

    state = {
        messageSubject: "",
        messageBody: "",
        emailId: "",
        cellNumberId: "",
        contactId: "",
        userId: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMessage = evt => {
        evt.preventDefault()
      
        const message = {
            messageSubject: this.setState.messageSubject,
            messageBody: this.setState.messageBody,
            emailId: this.setState.emailId,
            cellNumberId: this.setState.cellNumberId,
            contactId: parseInt(this.props.match.params.contactId),
            userId: parseInt(sessionStorage.getItem("credentials"))
        }

        this.props
            .addMessage(message)
            .then(() => this.props.history.push("/contacts"))

    }

    render() {
        return (
            <React.Fragment>
                <form className="contact-add">
                    <h1>Add a Message</h1>
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
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="Message Body"
                            placeholder="What do you want to say?"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Assign to Contact</label>
                        <select
                            defaultValue=""
                            name="contact"
                            id="contactSelection"
                            onChange={this.handleFieldChange}
                        >
                
                            {this.props.emails.filter(email => email.contactId === parseInt(this.props.match.params.contactId))
                            .map(e =>
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.email}
                                </option>
                            )}
                            {this.props.cellNumbers.filter(cellNumber => cellNumber.contactId === parseInt(this.props.match.params.contactId))
                            .map(cellNumber => <option key={cellNumber.id} id={cellNumber.id} value={cellNumber.id}>
                                {cellNumber.phoneNumber}
                            </option> )}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewMessage}
                        className="btn btn-primary"
                    >
                        Submit
              </button>
                </form>
            </React.Fragment>
        )
    }
}