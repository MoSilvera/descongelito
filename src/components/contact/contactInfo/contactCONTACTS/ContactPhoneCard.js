import React, { Component } from 'react'



export default class ContactEmailPhoneCard extends Component {


    render() {

        return (

            <section className="contactCard">
            this is the phone
            <button type="button"
                    className="btn btn-success justify-content-center"
                    onClick={() => {
                        this.props.history.push("/phone/1/edit")
                    }
                }>
                   edit
                    </button>
              </section>
        )
    }
}