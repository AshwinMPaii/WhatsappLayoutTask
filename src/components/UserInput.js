import React, { useState } from 'react'
import './InputClass.css';

const UserInput = ({ onFormSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default: break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { name, email, phone };
        onFormSubmit(formData);
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='single-item'>
                <input type="text"
                    name='name'
                    required
                    className='form-control'
                    placeholder='name'
                    value={name}
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className='single-item'>
                <input type="email"
                    name='email'
                    required
                    placeholder='email'
                    className='form-control'
                    value={email}
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className='single-item'>
                <input type="tel"
                    name='phone'
                    required
                    placeholder='Mobile No.'
                    className='form-control'
                    value={phone}
                    onChange={handleInputChange}
                ></input>
            </div>
            <button className='submit-btn' type="submit">Submit</button>
        </form>
    );
};

export default UserInput