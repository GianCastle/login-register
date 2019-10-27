import { useState } from 'react'

export const useForm = () => {
    
    const [inputs, setInputs] = useState({})
    const handleSubmit = event => {
        event.preventDefault()
        console.table(inputs)
    }
    
    const handleInputChange = event => {
        event.persist();
        
        setInputs(inputs => (
            { ...inputs, [event.target.name]: event.target.value  }
        ));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}