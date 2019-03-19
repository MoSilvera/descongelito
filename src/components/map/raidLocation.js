import raidLocationManager from "../../modules/resourceManager/raidLocationManager"
function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude + 
  "Longitude: " + position.coords.longitude)
}

const raidLocation = {
    raidLocationTagging: ()=> { {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log("Geolocation is not supported by this browser.")
        }
      }
    }
}

export default raidLocation