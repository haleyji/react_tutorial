import React, {useSate, useEffect, useState} from 'react';

function Form(){
    const [name, setName] = useState('Mary');

    useEffect(function persistForm(){
        localStorage.setItem('formData', name);
    });

    const [surname, setSurname] = useState('Poppins');

    useEffect(function updateTitle(){
        document.title = name + ' ' + surname;
    })
    return(
        <></>
    )
}
export default Form;