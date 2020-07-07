import React, { useState } from 'react'

import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import SocialMedia from '../components/SocialMedia'
import Notification from '../components/UI/Notficiation'

import checkValidity from '../utility/checkValidity'

import axios from 'axios'

import classes from './ContactForm.module.css'

const ContactForm = () => {
        const [ notification, setNotification ] = useState('')

        // Form Inputs 
        const [ name, setName ] = useState('')
        const [ email, setEmail ] = useState('')
        const [ message, setMessage ] = useState('')
    
        // Input Validation State
        const [ isNameValid, setIsNameValid ] = useState(false)
        const [ isEmailValid, setIsEmailValid ] = useState(false)
        const [ isMessageValid, setIsMessageValid ] = useState(false)
    
        const [ isNameTouched, setIsNameTouched ] = useState(false)
        const [ isEmailTouched, setIsEmailTouched ] = useState(false)
        const [ isMessageTouched, setIsMessageTouched ] = useState(false)
        
        // Form Inputs Config
        const NAME_CONFIG = {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            iconConfig: {
                name: 'signature',
                package: 'fal'
            },
            value: name,
            changed: e => inputChangedHandler("name", e.target.value),
            touched: isNameTouched,
            valid: isNameValid,
            warningMessage: 'Must be between 4 - 20 characters.'
        }
    
        const EMAIL_CONFIG = {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Email I should respond to'
            },
            iconConfig: {
                name: 'at',
                package: 'fal'
            },
            value: email,
            changed: e => inputChangedHandler("email", e.target.value),
            touched: isEmailTouched,
            valid: isEmailValid,
            warningMessage: 'Please provide a valid email.'
        }
    
        const MESSAGE_CONFIG = {
            elementType: 'textarea',
            elementConfig: {
                placeholder: ' Your Message Goes Here...'
            },
            value: message,
            changed: e => inputChangedHandler("message", e.target.value),
            touched: isMessageTouched,
            valid: isMessageValid,
            warningMessage: '   Your message MUST be at least 20 characters long.'
        }
    
        // Form Handlers
    
        const inputChangedHandler = (fieldName, value) => {
            const nameValidityRules = {
                required: true,
                minLength: 4,
                maxLength: 20
            }
    
            const emailValidityRules = {
                required: true,
                isEmail: true
            }
    
            const messageValidityRules = {
                required: true,
                minLength: 20
            }
    
            switch(fieldName) {
                case('name'):
                    setIsNameTouched(true)
                    const isValidName = checkValidity(value, nameValidityRules)
                    setIsNameValid(isValidName)
                    setName(value)
                    break
                case('email'):
                    setIsEmailTouched(true)
                    const isValidEmail = checkValidity(value, emailValidityRules)
                    setIsEmailValid(isValidEmail)
                    setEmail(value)
                    break
                case('message'):
                    setIsMessageTouched(true)
                    const isValidMessage = checkValidity(value, messageValidityRules)
                    setIsMessageValid(isValidMessage)
                    setMessage(value)
                    break
            }
        }

    const submitHandler = async e => {
        e.preventDefault()

        try {
            const data = {
                name, 
                message
            }

            if (isEmailValid && isNameValid && isMessageValid) {
                const response = await axios.post(`http://localhost:3001/contact/${email}`, data)
                setNotification(response.data)
                resetHandler()
            }
        } catch (e) {
            setNotification(e.message)
        }
    }

    const resetHandler = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const closeNotification = () => setNotification('')

    return (
        <div className = { classes.Container }>
            { 
                notification !== '' 
                    ? (
                        <Notification 
                            message = { notification }
                            close = { closeNotification } />
                    )
                    : null
            }
            <SocialMedia />
            <form className = { classes.Form } onSubmit = { submitHandler }>
                <h1>Send Me a Message!</h1>
                <Input { ...NAME_CONFIG } />
                <Input { ...EMAIL_CONFIG } />
                <Input { ...MESSAGE_CONFIG } />
                <Button type = "Submit" isSubmit = { true }>
                    Submit
                </Button>
            </form>

        </div>
    )
}

export default ContactForm