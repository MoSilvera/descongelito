import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default class AddContactEmail extends Component {

    state = {
        modal: false,
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
    constructNewContactEmail = evt => {
        evt.preventDefault()
          const contactEmail = {
            email: this.state.email,
            contactId: parseInt(this.props.match.params.contactId),
          }

          this.props
            .addEmail(contactEmail)
            .then(this.toggle)

      }


    render() {



        return (
            <React.Fragment>
                    <Button color="info" onClick={this.toggle}>Add Email</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>New Email</ModalHeader>
                        <ModalBody>
                            <div>

                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="email"

                                />
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.constructNewContactEmail}>Save</Button>

                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                
            </React.Fragment>
        )
    }
}