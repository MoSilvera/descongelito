import React, { Component } from 'react'
import "./landing.css"

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
                        this.props.history.push("/contacts")
                    }
                    }>
                    !
                    </button>
            </section>
        )
    }
}