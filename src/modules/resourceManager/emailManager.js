import APIManager from "./utilities/APIManager"

const emailManager = Object.create(APIManager, {
    array: {
        value: "emails"
    }
})

export default emailManager