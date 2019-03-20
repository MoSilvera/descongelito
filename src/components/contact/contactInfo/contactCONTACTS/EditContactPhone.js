import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import cellNumberManager from "../../../../modules/resourceManager/cellNumberManager"


export default class EditContactPhone extends Component {

    state = {
        modal: false,
        id: "",
        phoneNumber: "",
        contactId: "",
        carrierId: "",

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
    updateExistingCellNumber = evt => {

        const editedCellNumber = {
            id: this.state.id,
            phoneNumber: this.state.phoneNumber,
            contactId: this.state.contactId,
            carrierId: this.state.carrierId,

        };

        this.props.updateCellNumber(editedCellNumber)
            .then(() => this.toggle())


    }

    componentDidMount() {
        cellNumberManager.GET(this.props.cellNumberId)
            .then(cellNumber => {
                this.setState({
                    id: cellNumber.id,
                    phoneNumber: cellNumber.phoneNumber,
                    contactId: cellNumber.contactId
                });
            });
    }

    render() {



        return (
            <React.Fragment>
                    <Button color="info" onClick={this.toggle}><i class="fas fa-edit"></i></Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Edit Phone Number</ModalHeader>
                        <ModalBody>
                            <div>

                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="phoneNumber"
                                    value={this.state.phoneNumber}
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
                            <Button color="primary" onClick={this.updateExistingCellNumber}>Save Change</Button>

                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

            </React.Fragment>
        )
    }
}