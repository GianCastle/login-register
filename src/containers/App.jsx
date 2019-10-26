import React, { useState } from 'react'

import SmallCard from '../components/SmallCard'
import CardTabs from '../components/CardTabs'
import ButtonLarge from '../components/buttonLarge'

const App = props => {
    // State
    const [actual, setActual] = useState('Login');

    // Events handlers
    const changeActual = (item) => {
        return () => setActual(item);
    }
    return (
        <>
            <SmallCard>
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
                <ButtonLarge value={"Success"} />
            </SmallCard>
        </>
    )
}

export default App