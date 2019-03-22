import React, { Component } from 'react'
import EditContactPhone from './EditContactPhone';



export default class ContactPhoneCard extends Component {


    render() {

        return (

            <section>
            { this.props.cellNumbers.filter(cellNumber => cellNumber.contactId === parseInt(this.props.match.params.contactId))
            .map(cellNumber =>
            <div key={cellNumber.id}>
            <h5>{cellNumber.phoneNumber}</h5>
               <span><EditContactPhone
                cellNumberId={cellNumber.id}
                updateCellNumber={this.props.updateCellNumber}
                carriers={this.props.carriers}/>
             <button
                                onClick={() => this.props.deleteCellNumber(cellNumber.id)}
                                className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
             </span>
             </div>) }
            </section>
        )
    }
}