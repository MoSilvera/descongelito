import APIManager from "./utilities/APIManager"

const userManager = Object.create(APIManager, {
    array: {
        value: "users"
    }
})

export default userManager