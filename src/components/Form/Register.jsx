import React from 'react'
import IconInput from '../../components/IconInput'
import { useForm } from '../../hooks/useForm';

import emailIcon from '../../assets/img/email.svg'
import passwordIcon from '../../assets/img/locked.svg'
import idIcon from '../../assets/img/identification.svg'
import phoneIcon from '../../assets/img/telephone.svg'


export const Register = () => {
    const { inputs, handleInputChange, handleSubmit } = useForm();
    return (
        <>
            <form onSubmit={handleSubmit}>
                <IconInput
                    placeholder="Full name"
                    icon={idIcon}
                    type="text"
                    name="fullName"
                    value={inputs.fullName}
                    change={handleInputChange}
                    required
                />
                <IconInput
                    placeholder="Email"
                    icon={emailIcon}
                    type="email"
                    name="email"
                    value={inputs.email}
                    change={handleInputChange}
                    required
                />
                <IconInput
                    placeholder="Phone number"
                    icon={phoneIcon}
                    type="phone"
                    name="phone"
                    value={inputs.phone}
                    change={handleInputChange}
                    required
                />
                <IconInput
                    placeholder="Password"
                    icon={passwordIcon}
                    type="password"
                    name="password"
                    value={inputs.password}
                    autoComplete="new-password"
                    required
                    change={handleInputChange}
                />
                <input type="submit" value="Submit!" />
            </form>
        </>
    )
}