import React, { Component } from 'react'
import "./landing.css"
import sendEmails from "../../modules/emailjs/sendEmails"
import raidLocation from '../map/raidLocation';
import { Button } from 'reactstrap'


export default class Landing extends Component {


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
                    <h2><i class="fas fa-users"></i>  CONTACTS</h2>
                    </Button>
                <Button type="button"
                    className="landingButton"
                    size ="lg"
                    onClick={() => {
                        this.props.history.push("/map")
                    }
                    }>
                   <h2><i class="fas fa-map-marked-alt"></i>  RAID MAP</h2>
                    </Button>
                <Button type="button"
                    size ="lg"
                    className="btn-circle btn-xl"
                    outline color ="danger"
                    onClick={() => {
                        sendEmails.emergencyActivation()
                        raidLocation.raidLocationTagging()

                    }
                    }>
                    <h1><i class="fas fa-exclamation-triangle"></i></h1>
                    </Button>

            </section>
        )
    }
}