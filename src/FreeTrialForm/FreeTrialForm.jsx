import { useState } from 'react'

import { FreeTrialFormContainer, FreeTrialFormInput, FreeTrialFormSubmit, FreeTrialFormText, InputWrapper, ErrorIcon, ErrorText, EmailExistsText } from './FreeTrialFormStyles'
import { Link } from 'react-router-dom'

const ERROR_MESSAGES = {
    firstName: 'First Name cannot be empty',
    lastName: 'Last Name cannot be empty',
    email: {
        text: 'Looks like this is not an email',
        example: 'email@example.com'
    },
    password: 'Password cannot be empty'
}

export function FreeTrialForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false
    })

    function handleInputChange(event) {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Form submitted:', formData)

        const formErrors = {}

        for (const field in formData) {
            formErrors[field] = formData[field] === ''
        }

        setErrors(formErrors)
    }

    return (
        <FreeTrialFormContainer onSubmit={handleSubmit}>
            {['firstName', 'lastName', 'email', 'password'].map((field, index) => (
                <InputWrapper key={index}>
                    <FreeTrialFormInput
                        name={field}
                        type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                        placeholder={
                            errors[field]
                                ? ''
                                : field
                                    .replace(/([A-Z])/g, ' $1')
                                    .replace(/(^|\s)\w/g, match => match.toUpperCase())
                        }
                        value={formData[field]}
                        onChange={handleInputChange}
                    />
                    {errors[field] && (
                        <>
                            <ErrorIcon src='/assets/icon-error.svg' alt='Error icon' />
                            {field === 'email' && <EmailExistsText>{ERROR_MESSAGES.email.example}</EmailExistsText>}
                            <ErrorText>
                                {field === 'email' ? ERROR_MESSAGES.email.text : ERROR_MESSAGES[field]}
                            </ErrorText>
                        </>
                    )}
                </InputWrapper>
            ))}
            <FreeTrialFormSubmit type='submit' value='CLAIM YOUR FREE TRIAL' />
            <FreeTrialFormText>
                By clicking the button, you are agreeing to our{' '}
                <Link style={{ color: 'hsl(0, 100%, 74%)', fontWeight: '600' }}>Terms and Services</Link>
            </FreeTrialFormText>
        </FreeTrialFormContainer>
    )
}
