import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default class AddContactPhone extends Component {

    state = {
        modal: false,
        phoneNumber: "",
        carrierId: "",
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
    constructNewContactPhone = evt => {
        evt.preventDefault()
        const contactPhone = {
            phoneNumber: this.state.phoneNumber,
            contactId: parseInt(this.props.match.params.contactId),
            carrierId: parseInt(this.state.carrierId),
        }

        this.props
            .addPhone(contactPhone)
            .then(this.toggle)

    }


    render() {



        return (
            <React.Fragment>
                <span className="grouping">Phone Numbers<Button onClick={this.toggle}><i class="fas fa-plus-square"></i></Button></span>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>New Phone</ModalHeader>
                    <ModalBody>
                        <div>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="phoneNumber"

                            />
                            <div className="form-group">
                                <label htmlFor="contact">Assign to Carrier</label>
                                <select
                                    defaultValue=""
                                    name="carrierId"
                                    id="carrierId"
                                    onChange={this.handleFieldChange}
                                >
                                    <option>Pick a Carrier</option>
                                    {this.props.carriers.map(carrier =>
                                            <option className="carrier" key={carrier.id} id={carrier.id} value={carrier.id}>
                                                {carrier.serviceName}
                                            </option>
                                        )}
                                </select>
                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.state.carrierId === ""
                        ? () => window.alert("Please select a carrier")
                        :this.constructNewContactPhone}>Save</Button>

                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </React.Fragment>
        )
    }
}