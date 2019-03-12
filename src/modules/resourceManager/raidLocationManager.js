import APIManager from "./utilities/APIManager"

const raidLocationManager = Object.create(APIManager, {
    array: {
        value: "raidLocations"
    }
})

export default raidLocationManager
