import raidLocationManager from "../../modules/resourceManager/raidLocationManager"
function showPosition(position) {
    let raidObject = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        timeStamp: Date.now(),
        lat: position.coords.latitude,
        long: position.coords.longitude
    }
  raidLocationManager.POST(raidObject)

}

const raidLocation = { raidLocationTagging: ()=> { {
      if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition)}
      else {console.log("Geolocation is not supported by this browser.")}
      }
    }
}

export default raidLocation

// {
//     "id": 1,
//     "userId": 1,
//     "timeStamp": 552102066027,
//     "lat": 36.13271,
//     "long": -86.75657
//   }