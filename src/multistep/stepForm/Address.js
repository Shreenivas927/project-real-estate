import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from'@material-ui/core/Button';

export const Address = ({formData,setFormData,navigation})=> {
    const { address,city,state, zip }= formData
    return(
        <Container maxWidth='xs'>
            <h1>Address</h1>
            <TextField 
            label ="Address"
            name="address"
            onChange={setFormData}
            value={address} margin='normal' variant='outlined' 
            autoComplete='off' fullWidth/>

            <TextField 
            label ="City"
            name="city"
            onChange={setFormData}
            value={city} margin='normal' variant='outlined' 
            autoComplete='off' fullWidth/>

            <TextField 
            label ="State"
            name="state"
            onChange={setFormData}
            value={state} margin='normal' variant='outlined' 
            autoComplete='off' fullWidth/>

            <TextField 
            label ="Zip"
            name="zip"
            onChange={setFormData}
            value={zip} margin='normal' variant='outlined' 
            autoComplete='off' fullWidth/>

            <div style={{marginTop:"1rem"}}>
            <Button variant="contained" color="secondary" 
            style={{ marginRight:"1rem"}}
            onClick={() =>navigation.previous()}
            >Back</Button>
            <Button variant="contained"color="primary" style={{ marginRight:"1rem"}}
            onClick={() =>navigation.next()}>Next</Button>
            </div>
            
        </Container>
    )
}



