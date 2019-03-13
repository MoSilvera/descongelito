import React, { Component } from 'react'



export default class ContactPhoneCard extends Component {


    render() {
        let carrier = () => {this.props.carriers.filter(carrier => this.props.match.params === carrier.id)
        .map(carrier => carrier.name )}

        return (

            <section className="contactCard">
            { this.props.cellNumbers.filter(cellNumber => cellNumber.contactId === parseInt(this.props.match.params.contactId))
            .map(cellNumber =>
            <div>
            <h5>{cellNumber.phoneNumber}</h5>
               <span><button type="button"
                className="btn btn-success justify-content-center"
                onClick={() => {
                    this.props.history.push(`/phone/1/edit`)
                }
                }>
                edit
             </button>
             </span>
             </div>) }
            </section>
        )
    }
}