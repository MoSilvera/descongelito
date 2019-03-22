import React, { Component } from 'react'
import "./landing.css"
import sendEmails from "../../modules/emailjs/sendEmails"
import raidLocation from '../map/raidLocation';
import { Button } from 'reactstrap'
import tempButton from "../../images/energy.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Landing extends Component {
    notify = () => toast("Emergency Alert Activated!", {
        position: toast.POSITION.BOTTOM_LEFT
      });
;


    render() {

        return (

            <section className="landing">
                <div className="title">DESCONGELITO</div>
            <Button type="button"
                    size="lg"
                    className="landingButton"
                    onClick={() => {
                        this.props.history.push("/contacts")
                    }
                    }>
                    <h2><i className="fas fa-users"></i>  CONTACTS</h2>
                    </Button>
                <Button type="button"
                    className="landingButton"
                    size ="lg"
                    onClick={() => {
                        this.props.history.push("/map")
                    }
                    }>
                   <h2><i className="fas fa-map-marked-alt"></i>  RAID MAP</h2>
                    </Button>
                    <div id="instructions">Press To Activate Alert</div>
                <div type="button"
                    onClick={() => {
                        this.notify()
                        sendEmails.emergencyActivation()
                        raidLocation.raidLocationTagging()

                    }
                    }>
                    <h1><img alt="emergency button" id="tempButton" src={tempButton}/></h1>
                    </div>
                    <ToastContainer />

            </section>
        )
    }
}