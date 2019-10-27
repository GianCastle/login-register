import React, { useState } from 'react'

import SmallCard from '../components/SmallCard'
import CardTabs from '../components/CardTabs'
import BodyCard from '../components/BodyCard'
import IconInput from '../components/IconInput'
import ButtonLarge from '../components/buttonLarge'

import emailIcon from '../assets/img/email.svg'
import passwordIcon from '../assets/img/locked.svg'
import idIcon from '../assets/img/identification.svg'
import phoneIcon from '../assets/img/telephone.svg'

const App = props => {
    // State
    const [actual, setActual] = useState('Login');

    // State Login
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    // State Register
    const [emaiRegister, setEmaiRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [nameRegister, setNameRegiter] = useState('');
    const [phoneRegister, setPhoneRegister] = useState('');

    // Events handlers
    const changeActual = (item) => {
        return () => setActual(item);
    }
    return (
        <>
            <SmallCard className="mt-5">
                <CardTabs buttons={[
                        {
                            text: "Login",
                            action: changeActual("Login")
                        }, 
                        {
                            text: "Register",
                            action: changeActual("Register")
                        }
                    ]}
                    actual={actual}
                />
                <BodyCard>
                    {
                        (actual === 'Login') ?
                            <> 
                                <IconInput 
                                    placeholder="Email"
                                    icon={emailIcon}
                                    type="email"
                                    change={e => setEmailLogin(e.target.value)}
                                />
                                <IconInput 
                                    placeholder="Password"
                                    icon={passwordIcon}
                                    type="password"
                                    change={e => setPasswordLogin(e.target.value)}
                                />
                            </>
                        :
                            (actual === 'Register') ?
                                <>
                                    <IconInput 
                                        placeholder="Full name"
                                        icon={idIcon}
                                        type="text"
                                        change={e => setNameRegiter(e.target.value)}
                                    />
                                    <IconInput 
                                        placeholder="Email"
                                        icon={emailIcon}
                                        type="email"
                                        change={e => setEmaiRegister(e.target.value)}
                                    />
                                    <IconInput 
                                        placeholder="Phone number"
                                        icon={phoneIcon}
                                        type="phone"
                                        change={e => setPhoneRegister(e.target.value)}
                                    />
                                    <IconInput 
                                        placeholder="Password"
                                        icon={passwordIcon}
                                        type="password"
                                        change={e => setPasswordRegister(e.target.value)}
                                    />
                                </>
                            :
                                null
                    }
                </BodyCard>
                <ButtonLarge value="Success!" click={() => {console.log('yep')}} />
            </SmallCard>
        </>
    )
}

export default App