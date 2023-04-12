import React, { Component } from 'react'
import './InputClass.css'

class InputClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            email: '',
            phone: '',
            isEmailValid: true,
            isPhoneValid: true
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNameChange = (event) => {
        this.setState({ fname: event.target.value })
    }
    handleEmailChange = (event) => {
        const emailValue = event.target.value;
        const checkEmail = /\S+@gmail\.com/.test(emailValue);
        this.setState({ email: emailValue, isEmailValid: checkEmail });
    }
    handlePhoneChange = (event) => {
        const phoneValue = event.target.value;
        const checkPhone = /^\d{10}$/.test(phoneValue);
        this.setState({ phone: phoneValue, isPhoneValid: checkPhone });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.state.isEmailValid && this.state.isPhoneValid;
        if (isValid) {
            const newSubmission = {
                fname: this.state.fname,
                email: this.state.email,
                phone: this.state.phone
            };
            this.setState({
                fname: '',
                email: '',
                phone: '',
                isEmailValid: true,
                isPhoneValid: true
            });
            this.props.onFormSubmit(newSubmission);
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <div className='single-item'>
                    <input type="text"
                        required
                        name='fname'
                        className='form-control'
                        placeholder='name'
                        value={this.state.fname}
                        onChange={this.handleNameChange}
                    ></input>
                </div>
                <div className='single-item'>
                    <input type="email"
                        // autoComplete='off'
                        name='email'
                        required
                        placeholder='email'
                        className='form-control'
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    ></input>
                </div>
                {!this.state.isEmailValid && (<p style={{ color: 'red' }}>Invalid Email</p>)}
                <div className='single-item'>
                    <input type="tel"
                        name='phone'
                        required
                        placeholder='Mobile No.'
                        className='form-control'
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}
                    ></input>
                </div>
                {!this.state.isPhoneValid && (<p style={{ color: 'red' }}>Invalid Phone</p>)}
                <button className='submit-btn' type="submit">Submit</button>
            </form>
        )
    }
}

export default InputClass