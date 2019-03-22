import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class ContactAdd extends Component {




        state = {
            modal: false, 
            contactFirstName: "",
            contactLastName: "",
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

          constructNewContact = evt => {
            evt.preventDefault()
              const contact = {
                contactFirstName: this.state.contactFirstName,
                contactLastName: this.state.contactLastName,
                userId:parseInt(sessionStorage.getItem("credentials"))
              }

              this.props
                .addContact(contact)
                .then(() => this.toggle())


          }

          render() {
            return (
              <React.Fragment>
              <Button onClick={this.toggle}><i className="fas fa-user-plus"></i>  Add Contact</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add Message</ModalHeader>
                        <ModalBody>

                <form className="contact-add">

                  <div className="form-group">
                    <label htmlFor="contactFirstName">First Name</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="contactFirstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactLastName">Last Name</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="contactLastName"
                      placeholder="LastName"
                    />
                    </div>

                </form>

              </ModalBody>
                        <ModalFooter>
                            <Button
                            onClick={this.constructNewContact}>Save Change</Button>

                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    </React.Fragment>
            )
          }
    }

