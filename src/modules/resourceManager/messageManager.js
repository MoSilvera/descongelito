import APIManager from "./utilities/APIManager"

const messageManager = Object.create(APIManager, {
    array: {
        value: "messages"
    }
})

export default messageManager