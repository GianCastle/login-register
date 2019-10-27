import React from 'react'

import SmallCard from '../components/SmallCard'
import CardTabs from '../components/CardTabs'
import BodyCard from '../components/BodyCard'

import { useTabs } from '../hooks/useTabs'

//Pages
import { Register } from '../components/Form/Register'
import { Login } from '../components/Form/Login'

const App = () => {

    const { actual, changeActual } = useTabs('Login')
    const pages = [
        {
            text: "Login",
            action: changeActual("Login")
        },
        {
            text: "Register",
            action: changeActual("Register")
        }
    ]

    return (
        <>
            <SmallCard className="mt-5">
                <CardTabs buttons={pages} actual={actual} />
                <BodyCard>
                    {
                        (actual === pages[0].text)
                            ? <Login />
                            : <Register />
                    }
                </BodyCard>
            </SmallCard>
        </>
    )
}

export default App