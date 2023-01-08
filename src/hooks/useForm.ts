import { useState } from 'react';

export const useForm = <T> ( initialForm: T ) => {

    // TODO: Hacer validaciones
  
    const [ formState, setFormState ] = useState<T>( initialForm );

    const onInputChange = ({ target }:any) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}