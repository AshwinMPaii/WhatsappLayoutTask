import React from 'react';

const UserDisplay = ({ formDataList }) => {
    return (
        <div style={{ overflowY: 'scroll', height: '100vh' }}>
            {formDataList.map((formData, index) => (
                <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <div>Name: {formData.name}</div>
                    <div>Email: {formData.email}</div>
                    <div>Phone: {formData.phone}</div>
                </div>
            ))}
        </div>
    );
};

export default UserDisplay;