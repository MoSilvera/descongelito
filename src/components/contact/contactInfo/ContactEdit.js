
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

let newFriendShip = {}
class ContactEdit extends React.Component {

    state = {
        modal: false,

    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }



    handleFieldChange = evt => {
        // const stateToChange = {};
        newFriendShip["friend"] = evt.target.value;
        // this.setState(stateToChange);
    };
    NewFriend = evt => {

        newFriendShip = {
            userId: Number(sessionStorage.getItem("credentials")),
            friend: Number(document.querySelector("#friendId").value),
        };

        let previousFriend = true
        let addYourself = true
        if (newFriendShip.userId === newFriendShip.friend) {
            alert("You can't add yourself!")


        } else {
            addYourself = false
        }
        let userIds = this.props.friendships.map(user => user.friend)
        
        if (userIds.includes(newFriendShip.friend)) {
            alert("Already your friend!")
        } else {
            previousFriend = false
        }

        if (previousFriend === false && addYourself === false) {
            this.props.addFriend(newFriendShip).then(() => this.toggle())
        }
    };

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>Find A Friend</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                    <div>
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

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.togle}>Add Friend!</Button>
                        
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ContactEdit;