import React, { Component } from 'react'


export default class ContactAdd extends Component {




        state = {
            contactFirstName: "",
            contactLastName: "",
            userId: "",
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
                .then(() => this.props.history.push("/articles"))

          }

          render() {
            return (
              <React.Fragment>
                <form className="contact-add">
                <h1>Add a Contact</h1>
                  <div className="form-group">
                    <label htmlFor="contactFirstName">First Name</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="ContactFirstName"
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
                  <button
                    type="submit"
                    onClick={this.constructNewArticle}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </React.Fragment>
            )
          }
    }

