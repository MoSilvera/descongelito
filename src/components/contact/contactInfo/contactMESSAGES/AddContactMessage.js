import React, { Component } from 'react'



export default class AddContactMessage extends Component {

    state = {
        messageSubject: "",
        messageBody: "",
        emailId: "",
        contactSelection: "",
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
        let message = {}
        if (this.state.contactSelection.includes("@"))
        {message = {
            messageSubject: this.state.messageSubject,
            messageBody: this.state.messageBody,
            emailId: this.props.emails.find(email => email.email === this.state.contactSelection).id,
            cellNumberId: "false",
            contactId: parseInt(this.props.match.params.contactId),
            userId: parseInt(sessionStorage.getItem("credentials"))
        }}
        else {message = {
            messageSubject: this.state.messageSubject,
            messageBody: this.state.messageBody,
            emailId: "false",
            cellNumberId: parseInt(this.state.contactSelection),
            contactId: parseInt(this.props.match.params.contactId),
            userId: parseInt(sessionStorage.getItem("credentials"))
        }}
console.log(message)
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
                            id="messageBody"
                            placeholder="What do you want to say?"
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
                            {this.props.emails.filter(email => email.contactId === parseInt(this.props.match.params.contactId))
                            .map(e =>
                                <option className="email" key={e.id} id={e.email} value={e.email}>
                                    {e.email}
                                </option>
                            )}
                            {this.props.cellNumbers.filter(cellNumber => cellNumber.contactId === parseInt(this.props.match.params.contactId))
                            .map(cellNumber => <option className="cell" key={cellNumber.id} id={cellNumber.id} value={cellNumber.id}>
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