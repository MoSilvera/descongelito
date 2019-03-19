
import userManager from "../resourceManager/userManager"
import carrierManager from "../resourceManager/carrierManager"
import contactManager from "../resourceManager/contactManager"
import messageManager from "../resourceManager/messageManager"
import * as emailjs from "emailjs-com"

let template_params = {
    "contact_email": "",
    "contactFirstName": "",
    "contactLastName": "",
    "userFirstName": "",
    "userLastName": "",
    "message": "",
    "subject": ""
}
var service_id = "gmail";
var template_id = "contact_form";
const  sendEmails = {
    console: ()=>{ emailjs.init("user_QF7rgRgswIOf3pS7i18GT")
    emailjs.send(service_id, template_id, template_params)}
}

export default sendEmails




// console: () => userManager.GETALL()
// .then((users) => users.filter( (user) => user.id === parseInt(sessionStorage.getItem("credentials"))))
// .then((user) => user.map((r) => {
//         userFirstName = r.userFirstName
//         userLastName = r.userLastName}))
//     .then(()=> console.log(userFirstName + " " + userLastName))
//     .then(()=> contactManager.GETALL())
//     .then((contacts) => contacts.filter((contact) => contact.userId === parseInt(sessionStorage.getItem("credentials"))))
//     .then((arrayOfContacts) => contactArray = arrayOfContacts.map((contact) => contact.id))
//     .then(()=> messageManager.GETALL())
//     .then((messages) => messages.filter((message) => contactArray.includes(message.contactId)))
//     .then((r)=> console.log(r))
    
    // setUp = () => {
        // ;
        // emailjs.sendForm('contact_service', 'contact_template', this);
        // }
        
        
        // var template_params = {
        //     "contact_email": "mo.leslie.silvera@gmail.com",
        //     "contactFirstName": "Contact",
        //     "contactLastName": "Person",
        //     "userFirstName": "User",
        //     "userLastName": "Person",
        //     "message": "This is a test",
        //     "subject": "testing"
        // }
        // let sendEmail = () => {
        //     emailjs.init("user_QF7rgRgswIOf3pS7i18GT")
        //     var service_id = "gmail";
        //     var template_id = "contact_form";
        //     emailjs.send(service_id, template_id, template_params);
        // }

// fetch(`http://localhost:3003/messages?_expand=contact&&`)
//     .then(r => r.json())
//     .then((r) => r.map((r) => console.log(r.contact.contactFirstName)))
// let fetchCall = fetch(`http://localhost:3003/messages?_expand=contact&&`)