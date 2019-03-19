import React, { Component } from 'react'
import "./landing.css"
import sendEmails from "../../modules/emailjs/sendEmails"

export default class Landing extends Component {


    render() {

        return (

            <section className="landing">
                this is the landing page
            <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push("/contacts")
                    }
                    }>
                    contacts
                    </button>
                <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push("/map")
                    }
                    }>
                    Map
                    </button>
                <button type="button"
                    className="btn-circle btn-xl"
                    onClick={() => {
                        sendEmails.console()
                    }
                    }>
                    !
                    </button>
            </section>
        )
    }
}