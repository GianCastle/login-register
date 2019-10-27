import { useState } from 'react'

export const useTabs = (initialPage) => {
    const [actual, setActual] = useState(initialPage)
    const changeActual = item => () => setActual(item)

    return {
        setActual,
        changeActual,
        actual,
    }
};