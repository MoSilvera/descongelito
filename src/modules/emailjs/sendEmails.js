
import userManager from "../resourceManager/userManager"
import emailManager from "../../modules/resourceManager/emailManager"
import contactManager from "../resourceManager/contactManager"
import messageManager from "../resourceManager/messageManager"
import * as emailjs from "emailjs-com"



const  sendEmails = {
    emergencyActivation: ()=> {
        var currentUserId = ""
        var currentUserFirstName = ""
        var currentUserLastName = ""
        var contactIdArray = []
        var contactArray =  []
        var service_id = "gmail";
        var template_id = "contact_form";

        userManager.GETALL()
        .then((users)=> users.find((user)=> user.id === parseInt(sessionStorage.getItem("credentials"))))
        .then((user) => {
            currentUserId = user.id
            currentUserFirstName = user.userFirstName
            currentUserLastName = user.userLastName
        })
        .then(()=> contactManager.GETALL())
        .then((contacts) => contacts.filter((contact) => contact.userId === currentUserId))
        .then((myContacts) => contactArray = myContacts)
        .then(()=> contactIdArray = contactArray.map((contact)=> contact.id))
        .then(()=> messageManager.GETALL())
        .then((messages) => messages.filter((message)=> contactIdArray.includes(message.contactId)))
        .then((myContactsMessages) => myContactsMessages.forEach(message => {
            let template_params = {
                "contact_email": "",
                "contactFirstName": "",
                "contactLastName": "",
                "userFirstName": currentUserFirstName,
                "userLastName": currentUserLastName,
                "message": message.messageBody,
                "subject": message.messageSubject
            }
            contactManager.GET(message.contactId)
            .then((contact)=> {
                template_params.contactFirstName = contact.contactFirstName
                template_params.contactLastName = contact.contactLastName
            })
            .then(()=> emailManager.GET(message.email))
            .then((email)=> template_params.contact_email = email.email)
            .then(()=>  { emailjs.init("user_QF7rgRgswIOf3pS7i18GT")
                emailjs.send(service_id, template_id, template_params)})
        }) )
    }


}

export default sendEmails

