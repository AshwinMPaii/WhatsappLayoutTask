import React, { Component } from 'react'
import './InputClass.css'

class InputClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            email: '',
            phone: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNameChange = (event) => {
        this.setState({ fname: event.target.value })
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    handlePhoneChange = (event) => {
        this.setState({ phone: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newSubmission = {
            fname: this.state.fname,
            email: this.state.email,
            phone: this.state.phone
        };
        this.setState({
            fname: '',
            email: '',
            phone: ''
        });
        this.props.onFormSubmit(newSubmission);
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
                        name='email'
                        required
                        placeholder='email'
                        className='form-control'
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    ></input>
                </div>
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
                <button className='submit-btn' type="submit">Submit</button>
            </form>
        )
    }
}

export default InputClass