import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';



const UserDisplay = ({ formDataList, onDelete, onUpdate }) => {
    const handleDelete = (index) => {
        onDelete(index);
    };
    const handleUpdate = (index) => {
        onUpdate(index);
    }
    return (
        <div className='form-submission' style={{ overflowY: 'scroll', height: '100vh' }}>
            {formDataList.map((formData, index) => (
                <div className='form-content' key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <div className='items'>Name: {formData.name}</div>
                    <div className='items'>Email: {formData.email}</div>
                    <div className='items'>Phone: {formData.phone}</div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faEdit} style={{ color: 'blue', cursor: 'pointer', marginRight: '13px' }} onClick={() => handleUpdate(index)} />
                        <FontAwesomeIcon icon={faTrash} style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(index)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserDisplay;