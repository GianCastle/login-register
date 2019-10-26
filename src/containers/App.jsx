import React from 'react'

import SmallCard from '../components/SmallCard'
import CardTabs from '../components/CardTabs'

const App = props => {
    return (
        <>
            <SmallCard>
                <CardTabs buttons={[
                        {
                            text: "Login",
                            action: () => {}
                        }, 
                        {
                            text: "Register",
                            action: () => {}
                        }
                    ]}
                    actual={"Login"}
                />
            </SmallCard>
        </>
    )
}

export default App