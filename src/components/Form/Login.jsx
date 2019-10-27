import React from 'react'
import IconInput from '../../components/IconInput'
import { useForm } from '../../hooks/useForm';

import emailIcon from '../../assets/img/email.svg'
import passwordIcon from '../../assets/img/locked.svg'


export const Login = () => {
    const { inputs, handleInputChange, handleSubmit } = useForm();

    return (
        <>
            <form onSubmit={handleSubmit}>
                <IconInput
                    placeholder="Email"
                    icon={emailIcon}
                    type="email"
                    name="email"
                    value={inputs.email}
                    change={handleInputChange}
                />
                <IconInput
                    placeholder="Password"
                    icon={passwordIcon}
                    type="password"
                    name="password"
                    value={inputs.password}
                    autoComplete="current-password"
                    required
                    change={handleInputChange}
                />
                <input type="submit" value="Submit!" />
            </form>


        </>
    )
}