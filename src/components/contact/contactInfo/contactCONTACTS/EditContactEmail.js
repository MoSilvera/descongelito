import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import emailManager from "../../../../modules/resourceManager/emailManager"


export default class EditContactEmail extends Component {

    state = {
        modal: false,
        id: "",
        email: "",
        contactId: "",

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
    updateExistingEmail = evt => {

        const editedEmail = {
            id: this.state.id,
            email: this.state.email,
            contactId: this.state.contactId,

        };

        this.props.updateEmail(editedEmail)
            .then(() => this.toggle())
            
        

    }

    componentDidMount() {
        emailManager.GET(this.props.emailId)
            .then(email => {
                this.setState({
                    id: email.id,
                    email: email.email,
                    contactId: email.contactId
                });
            });
    }

    render() {



        return (
            <React.Fragment>
                    <Button color="info" onClick={this.toggle}><i className="fas fa-edit"></i></Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Edit Email</ModalHeader>
                        <ModalBody>
                            <div>

                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="email"
                                    value={this.state.email}
                                />
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.updateExistingEmail}>Save Change</Button>

                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                
            </React.Fragment>
        )
    }
}