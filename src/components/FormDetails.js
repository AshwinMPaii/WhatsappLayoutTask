import React, { Component } from 'react';
import './InputClass.css';

class FormDetails extends Component {
    render() {
        return (
            <div className='form-submission' style={{ overflowY: 'scroll', height: '100vh' }}>
                <h2>Form Submissions</h2>
                <div>
                    {this.props.formSubmissions.map((submission, index) => (
                        <div className='form-content' key={index} >
                            <p className='items'>Name: {submission.fname}</p>
                            <p className='items'>Email: {submission.email}</p>
                            <p className='items'>Phone: {submission.phone}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FormDetails;
