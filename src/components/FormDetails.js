import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './InputClass.css';

class FormDetails extends Component {
    render() {
        const { formSubmissions, handleDelete, handleUpdate } = this.props
        return (
            <div className='form-submission' style={{ overflowY: 'scroll', height: '100vh' }}>
                <h2 className='form-title'>Form Submissions</h2>
                {formSubmissions.map((submission, index) => (
                    <div className='form-content' key={index} >
                        <p className='items'>Name: {submission.fname}</p>
                        <p className='items'>Email: {submission.email}</p>
                        <p className='items'>Phone: {submission.phone}</p>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faEdit} style={{ color: 'blue', cursor: 'pointer', marginRight: '10px' }} onClick={() => handleUpdate(index)}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTrash} style={{ color: 'red', cursor: 'pointer', marginRight: '10px' }} onClick={() => handleDelete(index)}></FontAwesomeIcon>
                        </div>
                    </div>

                ))}
            </div>
        );
    }
}

export default FormDetails;

