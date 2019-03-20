import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserManager from "../../modules/resourceManager/utilities/UserManager"


export default class Register extends Component {

    state = {
        modal: false,
        userName: "",
        email: "",
        password: "",
        userFirstName: "",
        userLastName: "",

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

    handleRegister = e => {
        e.preventDefault()
        const newUser = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            userFirstName: this.state.userFirstName,
            userLastName: this.state.userLastName,
        }
        if (this.state.userName && this.state.password && this.state.email && this.state.userFirstName && this.state.userLastName) {
          UserManager.searchUsername(this.state.userName).then(users => {
            if (users.length) {
              alert(`Username ${this.state.userName} already exits!`)
            } else {
              UserManager.addUser(newUser).then(user => {
                sessionStorage.setItem("credentials", parseInt(user.id))
                this.props.setAuth()
              })
              .then(()=> this.toggle())
            }
          })
        } else {
          alert("Please Fill Out Form 😬!")
        }
      }

    render() {


        return (

            <section className="createUser">
                <div>
                    <Button color="info" onClick={this.toggle}>Register</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                        <ModalBody>
                            <React.Fragment>
                                <form className="add user">

                                    <div className="form-group">
                                        <label htmlFor="userName">Username</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="userName"
                                            placeholder="username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="password"
                                            placeholder="password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="email"
                                            placeholder="email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userFirstName">First Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="userFirstName"
                                            placeholder="first name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userLastName">Last Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            onChange={this.handleFieldChange}
                                            id="userLastName"
                                            placeholder="last name"
                                        />
                                    </div>

                                </form>
                            </React.Fragment>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleRegister}>Register</Button>

                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </section>
        )
    }
}