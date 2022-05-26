import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from'@material-ui/core/Button';

export const Names = ({formData,setFormData,navigation})=> {
    // console.log(props)
    const { firstName, lastName, nickName } = formData;
    return(
        <Container maxWidth='xs'>
            <h1>Names</h1>
            <TextField 
            label ="First Name"
            name="firstName"
            onChange={setFormData}
            value={firstName} margin='normal' variant='outlined' 
            autoComplete='off' fullWidth/>
            
            <TextField 
            label ="Last Name"
            name="lastName"
            value={lastName} margin='normal' variant='outlined' 
            autoComplete='off' fullWidth/>

            <TextField 
            label ="Nick Name"
            name="nickName"
            value={nickName} margin='normal' variant='outlined' 
            autoComplete='off' fullWidth/>

            <Button variant='contained' fullWidth color="primary"
            onClick={()=> navigation.next()} 
            style={{marginTop:'1rem'}}>Next</Button>
        </Container>
    )
}



