import React, { Component } from 'react'



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
              </section>
        )
    }
}