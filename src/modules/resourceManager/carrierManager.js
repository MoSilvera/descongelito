import APIManager from "./utilities/APIManager"

const carrierManager = Object.create(APIManager, {
    array: {
        value: "carriers"
    }
})

export default carrierManager