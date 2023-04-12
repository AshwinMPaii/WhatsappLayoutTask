import React, { useState, useEffect } from 'react'
import './InputClass.css';

const UserInput = ({ onFormSubmit, updateIndex, formDataList }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);

    useEffect(() => {
        // console.log("FormDataListCalled");
        if (updateIndex !== -1) {
            setName(formDataList[updateIndex].name);
            setEmail(formDataList[updateIndex].email);
            setPhone(formDataList[updateIndex].phone);
        }
    }, [formDataList, updateIndex]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                // const isValidEmail = /\S+@gmail\.com/.test(value);//returns true or false
                // setIsEmailValid(isValidEmail);
                break;
            case 'phone':
                setPhone(value);
                // const isValidPhone = /^\d{10}$/.test(value);
                // setIsPhoneValid(isValidPhone);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValidEmail = /\S+@gmail\.com/.test(email);//returns true or false
        setIsEmailValid(isValidEmail);
        const isValidPhone = /^\d{10}$/.test(phone);
        setIsPhoneValid(isValidPhone)
        if (isValidEmail && isValidPhone) {
            const formData = { name, email, phone };
            // onFormSubmit(formData, updateIndex);
            if (updateIndex === -1) {
                onFormSubmit(formData);//for normal case
            } else {
                onFormSubmit(formData, updateIndex);//for updating case
            }
            setName('');
            setEmail('');
            setPhone('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='single-item'>
                <input
                    type='text'
                    name='name'
                    required
                    className='form-control'
                    placeholder='name'
                    value={name}
                    onChange={handleInputChange}
                ></input>
            </div>
            <div className='single-item'>
                <input
                    type='email'
                    name='email'
                    required
                    placeholder='email'
                    className='form-control'
                    value={email}
                    onChange={handleInputChange}
                ></input>
            </div>
            {!isEmailValid && (
                <p style={{ color: 'red' }}>Invalid email</p>
            )}
            <div className='single-item'>
                <input
                    type='tel'
                    name='phone'
                    required
                    placeholder='Mobile No.'
                    className='form-control'
                    value={phone}
                    onChange={handleInputChange}
                ></input>
            </div>
            {!isPhoneValid && (
                <p style={{ color: 'red' }}>Invalid number</p>
            )}
            <button className='submit-btn' type='submit'>
                Submit
            </button>
        </form>
    );
};

export default UserInput;

