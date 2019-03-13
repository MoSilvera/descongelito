import React, { Component } from 'react'



export default class ContactPhoneCard extends Component {


    render() {


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