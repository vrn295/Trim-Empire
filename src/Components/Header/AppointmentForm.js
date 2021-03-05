import React from 'react';

export default class AppointmentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            mobileNo: '',
            currentDate: '',
            appointDate: '',
            
        }
    }
}