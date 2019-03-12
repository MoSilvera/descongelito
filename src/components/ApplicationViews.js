import React, { Component } from "react"
import { Route } from "react-router-dom"
import MapContainer from "./map/Map"
import Landing from "./home/Landing"
import ContactEdit from "./contact/contactInfo/ContactEdit"
import ContactList from "./contact/ContactList"
import ContactInfo from "./contact/contactInfo/ContactInfo"
import AddContactMessage from "./contact/contactInfo/contactMESSAGES/AddContactMessage"
import ContactMessageDetail from "./contact/contactInfo/contactMESSAGES/ContactMessageDetail"
import ContactMessageList from "./contact/contactInfo/contactMESSAGES/ContactMessageList"
import EditContactMessage from "./contact/contactInfo/contactMESSAGES/EditContactMessage"
import AddContactContact from "./contact/contactInfo/contactCONTACTS/AddContactContact"
import ContactContactList from "./contact/contactInfo/contactCONTACTS/ContactContactList"
import EditContactPhone from "./contact/contactInfo/contactCONTACTS/EditContactPhone"
import EditContactEmail from "./contact/contactInfo/contactCONTACTS/EditContactEmail"
import cellNumberManager from "../modules/resourceManager/cellNumberManager"
import userManager from "../modules/resourceManager/userManager"
import emailManager from "../modules/resourceManager/emailManager"
import carrierManager from "../modules/resourceManager/carrierManager"
import messageManager from "../modules/resourceManager/messageManager"
import raidLocationManager from "../modules/resourceManager/raidLocationManager"
import contactManager from "../modules/resourceManager/contactManager"
class ApplicationViews extends Component {
  state = {
    users: [{}],
    raidLocations: [],
    contacts: [],
    emails: [],
    cellNumbers: [],
    carriers: [],
    messages: [],

  }
  componentDidMount() {
    const newState = {}
    // userManager.GETALL().then(users => {
    //   newState.users = users
    // })
    // .then(() => 
    // raidLocationManager.GETALL().then(raidLocations => {
    //   newState.raidLocations = raidLocations
    // })
    // )
    // .then(() => contactManager.GETALL().then(contacts => {
    //   newState.contacts = contacts
    // }))
    // .then(() => emailManager.GETALL().then(emails => {
    //   newState.emails = emails
    // }))
    // .then(() => cellNumberManager.GETALL().then(cellNumbers => {
    //   newState.cellNumbers = cellNumbers
    // }))
    // .then(() => carrierManager.GETALL().then(carriers => {
    //   newState.carriers = carriers
    // }))
    // .then(() => messageManager.GETALL().then(messages => {
    //   newState.messages = messages
    // }))
    //   .then(() => {
    //     this.setState(newState)
    //   })

  }
  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={(props) => {
          return <Landing {...props} />
        }} />
        <Route exact path="/contacts" render={(props) => {
          return <ContactList {...props} />
        }} />
        <Route exact path="/map" render={(props) => {
          return <MapContainer {...props} />
        }} />
        <Route exact path="/contacts/:contactId(\d+)/info" render={props => {
          return <ContactInfo users={this.state.users} {...props} />
        }} />
         <Route exact path="/contacts/:contactId(\d+)/edit" render={props => {
          return <ContactEdit {...props} />
        }} />
        <Route exact path="/contacts/:contactId(\d+)/info/contacts" render={props => {
          return <ContactContactList {...props} />
        }} />
        <Route exact path="/phone/:phoneId(\d+)/edit" render={props => {
            return <EditContactPhone {...props} />
          }}
        />
         <Route exact path="/email/:EmailId(\d+)/edit" render={props => {
            return <EditContactEmail {...props} />
          }}
        />
        <Route exact path="/contact/addInnerContact" render={props => {
            return <AddContactContact {...props} />
          }}
        />
        <Route exact path="/contacts/:contactId(\d+)/info/messages" render={props => {
          return <ContactMessageList {...props} />
        }} />
        <Route exact path="/message/:messageId(\d+)" render={props => {
          return <ContactMessageDetail {...props} />
        }} />
        <Route exact path="/messages/:messageId(\d+)/edit" render={props => {
            return <EditContactMessage {...props} />
          }}
        />
        <Route exact path="/messages/:messageId(\d+)/add" render={props => {
            return <AddContactMessage {...props}/>
          }}
        />

      </React.Fragment>
    )
  }
}

export default ApplicationViews
