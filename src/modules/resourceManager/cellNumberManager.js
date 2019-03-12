import APIManager from "./utilities/APIManager"

const cellNumberManager = Object.create(APIManager, {
    array: {
        value: "cellNumbers"
    }
})

export default cellNumberManager