import APIManager from "./utilities/APIManager"

const contactManager = Object.create(APIManager, {
    array: {
        value: "contacts"
    }
})

export default contactManager