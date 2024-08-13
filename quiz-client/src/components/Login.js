import React from 'react'

// From Material UI we are importing things
import { Button, TextField, Box, Card, CardContent, Typography } from '@mui/material'
import Center from './Center'
import useForm from '../hooks/useForm'

const getFreshModel = () => ({
    name: '',
    email: ''
});

export default function Login() {

    const { values, setValues, errors, setErrors, handleInputChange } = useForm(getFreshModel)

    const login = (e) => {
        e.preventDefault()
        if(validate())
            console.log(values)
    }

    const validate = () => {
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.name = values.name !== "" ? "" : "This field is required."
        setErrors(temp)
        // From this function we have to return the boolean value indicating whether form is valid or not 
        return Object.values(temp).every(x => x === "")
    }


    return (

        <Center>
            <Card sx={{ width: '400px' }}>
                <CardContent sx={{ textAlign: "center" }} >


                    <Typography variant='h3' sx={{ my: 3 }} > Quiz App </Typography>
                    <Box sx={{
                        // It is same as div in html
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%',
                        }
                    }}>
                        <form noValidate autoComplete='off' onSubmit={login} >

                            <TextField label='Email' name='email' value={values.email}    onChange={handleInputChange} variant='outlined'
                            {...(errors.email && {error: true, helperText: errors.email })}
                            />

                            <TextField label='Name' name='name' value={values.name} 
                            onChange={handleInputChange} variant='outlined'
                            {...(errors.name && {error: true, helperText: errors.name })}
                            />

                            <Button type='submit' variant='contained' size='large'
                                sx={{ width: '90%' }}> Submit </Button>

                        </form>

                    </Box>

                </CardContent>
            </Card>
        </Center>




    )
}
