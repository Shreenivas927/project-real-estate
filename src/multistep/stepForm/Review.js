import React from 'react'
import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
import Button from'@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

export const Review = ({formData, navigation})=> {
    const{go}=navigation
    const { firstName,
    lastName,
    nickName,
    address, 
    city,
    state,
    zip,
    phone,
    email}= formData;
    return(
        <Container maxWidth='xs'>
            <h1>Review</h1>


            <RenderAccordion  summary="Names"go={go} details={[
                {'First Name':firstName},
                {'Last Name':lastName},
                {'Nick Name':nickName},
                
            ]}/>
             <RenderAccordion  summary="Address" go={go} details={[
                {'Address':address},
                {'city':city},
                {'State':state},
                {'zip':zip},
                
            ]}/>
             <RenderAccordion  summary="Contact" go={go} details={[
                {'Phone':phone},
                {'email':email},
               
                
            ]}/>
            <Button color="primary"
            variant="contained"
            style={{marginTop:'1.5rem'}}
            // onClick={()=> go(`${}`)}
            >Submit</Button>
        </Container>

    )
}
export const RenderAccordion = ({ summary, details, go}) =>(
    <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>{summary}</AccordionSummary>
    <AccordionDetails>
        <div>
        {
            details.map((data, index) => {
                const objKey = Object.keys(data)[0];
                const objValue = data[Object.keys(data)[0]];
                // console.log(Object.keys(data)[0])
                // console.log(data[Object.keys(data)[0]])
                return
                // console.log({objKey:objValue})
                <ListItemText key={index}>{`${objKey}:${objValue}`}</ListItemText>
            })}
            <IconButton color="primary" component="span"> 
            <EditIcon/></IconButton>
        </div>
    </AccordionDetails>
</Accordion>
)


