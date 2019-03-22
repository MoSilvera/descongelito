import React, { Component } from "react"
import { Route } from "react-router-dom"
import MapContainer from "./map/Map"
import Landing from "./home/Landing"
import ContactEdit from "./contact/contactInfo/ContactEdit"
import ContactList from "./contact/ContactList"
import ContactAdd from "./contact/ContactAdd"
import ContactInfo from "./contact/contactInfo/ContactInfo"
import AddContactMessage from "./contact/contactInfo/contactMESSAGES/AddContactMessage"
import ContactMessageDetail from "./contact/contactInfo/contactMESSAGES/ContactMessageDetail"
import ContactMessageList from "./contact/contactInfo/contactMESSAGES/ContactMessageList"
import ContactContactList from "./contact/contactInfo/contactCONTACTS/ContactContactList"
import cellNumberManager from "../modules/resourceManager/cellNumberManager"
import userManager from "../modules/resourceManager/userManager"
import emailManager from "../modules/resourceManager/emailManager"
import carrierManager from "../modules/resourceManager/carrierManager"
import messageManager from "../modules/resourceManager/messageManager"
import raidLocationManager from "../modules/resourceManager/raidLocationManager"
import contactManager from "../modules/resourceManager/contactManager"
class ApplicationViews extends Component {
  state = {
    users: [],
    raidLocations: [],
    contacts: [],
    emails: [],
    cellNumbers: [],
    carriers: [],
    messages: [],

  }

  addContact = contact =>
    contactManager.POST(contact)
      .then(() => contactManager.GETALL())
      .then(contacts =>
        this.setState({
          contacts: contacts
        })
      )
      deleteContact = (id) => {
        let check = window.confirm("Are you sure you want to delete this contact?")
          if (check) {
          return contactManager.DELETE(id)
          .then(() => contactManager.GETALL())
          .then(contacts => this.setState({ contacts: contacts }))
        }
          else{console.log("else bitch")}


      }
      updateContact = (editedContactObject) => {
        return contactManager.PUT(editedContactObject)
          .then(() => contactManager.GETALL())
          .then(contacts => {
            this.setState({
              contacts: contacts
            })
          });
      };
      addMessage = message =>
    messageManager.POST(message)
      .then(() => messageManager.GETALL())
      .then(messages =>
        this.setState({
          messages: messages
        })
      )
      deleteMessage = (id) => {
        return messageManager.DELETE(id)
          .then(() => messageManager.GETALL())
          .then(messages => this.setState({ messages: messages }))

      }
      updateMessage = (editedMessageObject) => {
        return messageManager.PUT(editedMessageObject)
          .then(() => messageManager.GETALL())
          .then(messages=> {
            this.setState({
             messages: messages
            })
          });
      };
      addEmail = email =>
        emailManager.POST(email)
        .then (() => emailManager.GETALL())
        .then(emails =>
          this.setState({
            emails: emails
          }))

      deleteEmail = (id) => {
        return emailManager.DELETE(id)
          .then(() => emailManager.GETALL())
          .then(emails => this.setState({ emails: emails }))

      }
      updateEmail = (editedEmailObject) => {
        return emailManager.PUT(editedEmailObject)
          .then(() => emailManager.GETALL())
          .then(emails=> {
            this.setState({
             emails: emails
            })
          });
      };
      addPhone = phone =>
        cellNumberManager.POST(phone)
        .then(() => cellNumberManager.GETALL())
        .then(cellNumbers =>
          this.setState ({
            cellNumbers: cellNumbers
          }))

      deleteCellNumber = (id) => {
        return cellNumberManager.DELETE(id)
          .then(() => cellNumberManager.GETALL())
          .then(cellNumbers => this.setState({ cellNumbers: cellNumbers }))

      }
      updateCellNumber = (editedCellNumberObject) => {
        return cellNumberManager.PUT(editedCellNumberObject)
          .then(() => cellNumberManager.GETALL())
          .then(cellNumbers=> {
            this.setState({
             cellNumbers: cellNumbers
            })
          });
      };
  componentDidMount() {
    const newState = {}
    userManager.GETALL().then(users => {
      newState.users = users
    })
    .then(() =>
    raidLocationManager.GETALL().then(raidLocations => {
      newState.raidLocations = raidLocations
    })
    )
    .then(() => contactManager.GETALL().then(contacts => {
      newState.contacts = contacts
    }))
    .then(() => emailManager.GETALL().then(emails => {
      newState.emails = emails
    }))
    .then(() => cellNumberManager.GETALL().then(cellNumbers => {
      newState.cellNumbers = cellNumbers
    }))
    .then(() => carrierManager.GETALL().then(carriers => {
      newState.carriers = carriers
    }))
    .then(() => messageManager.GETALL().then(messages => {
      newState.messages = messages
    }))
      .then(() => {
        this.setState(newState)
      })

  }
  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={(props) => {
          return <Landing {...props} />
        }} />
        <Route exact path="/contacts" render={(props) => {
          return <ContactList 
            contacts={this.state.contacts}
            addContact={this.addContact} 
            {...props} />
        }} />
        <Route exact path="/map" render={(props) => {
          return <MapContainer 
          raidLocations={this.state.raidLocations}
          {...props} />
        }} />
        <Route exact path="/contacts/:contactId(\d+)/info" render={props => {
          return <ContactInfo
            contacts= {this.state.contacts}
            users={this.state.users}
            deleteContact={this.deleteContact}
            updateContact={this.updateContact}
            {...props} />
        }} />
        <Route exact path="/contacts/:contactId(\d+)/edit" render={props => {
          return <ContactEdit contact={this.state.contacts}{...props} />
        }} />
        <Route exact path="/contacts/:contactId(\d+)/info/contacts" render={props => {
          return <ContactContactList
            contacts={this.state.contacts}
            emails={this.state.emails}
            cellNumbers={this.state.cellNumbers}
            carriers={this.state.carriers}
            deleteEmail={this.deleteEmail}
            deleteCellNumber={this.deleteCellNumber}
            updateEmail={this.updateEmail}
            updateCellNumber={this.updateCellNumber}
            addEmail={this.addEmail}
            addPhone={this.addPhone}
            {...props} />
        }} />

        <Route exact path="/contacts/:contactId(\d+)/info/messages" render={props => {
          return <ContactMessageList
            messages={this.state.messages}
            contacts={this.state.contacts}
            deleteMessage={this.deleteMessage}
            emails={this.state.emails}
            cellNumbers={this.state.cellNumbers}
            updateMessage={this.updateMessage}
            addMessage={this.addMessage}
            {...props} />
        }} />
        <Route exact path="/message/:messageId(\d+)" render={props => {
          return <ContactMessageDetail {...props} />
        }} />

        <Route exact path="/messages/:contactId(\d+)/add" render={props => {
          return <AddContactMessage
            contacts={this.state.contacts}
            emails={this.state.emails}
            cellNumbers={this.state.cellNumbers}
            addMessage={this.addMessage}

            {...props} />
        }}
        />

      </React.Fragment>
    )
  }
}

export default ApplicationViews
