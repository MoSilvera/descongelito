import React, { Component } from 'react'
import EditContactPhone from './EditContactPhone';
import {Button, Card, CardTitle} from 'reactstrap'


export default class ContactPhoneCard extends Component {


    render() {

        return (

            <Card className="ContactAddresses">
              { this.props.cellNumbers.filter(cellNumber => cellNumber.contactId === parseInt(this.props.match.params.contactId))
            .map(cellNumber =>
            <div key={cellNumber.id}>
            <CardTitle>{cellNumber.phoneNumber}</CardTitle>
               <span><EditContactPhone
                cellNumberId={cellNumber.id}
                updateCellNumber={this.props.updateCellNumber}
                carriers={this.props.carriers}/>
             <Button
                                onClick={() => this.props.deleteCellNumber(cellNumber.id)}
                                className="btn"><i className="fas fa-trash-alt"></i> Delete</Button>
             </span>
             </div>) }
            </Card>
        )
    }
}