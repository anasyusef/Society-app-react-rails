import React from 'react';
import {Typography, Grid, Card, CardContent} from '@material-ui/core'
import Dashboard from '../Dashboard';
import SocietyCard from './SocietyCard';
import CustomizedSnackbar from '../../CustomizedSnackbar';
import Auth from 'j-toker';
import $ from 'jquery';





export default function JoinedSocieties(props) {

  const [open, setOpen] = React.useState(false);
  const [snackBarInfo, setSnackBarInfo] = React.useState({message: '', variant: ''})

  const [joinedSocieties, setJoinedSocieties] = React.useState(props.joined_societies)
  Auth.configure({apiUrl: '/api/v1'});
  const handleQuit = id => {
    setOpen(true)
    $.ajax({
        type: 'DELETE',
        url: `http://localhost:3000/api/v1/registrations/${id}`,
        dataType: 'JSON',
        headers: Auth.retrieveData('authHeaders'),
    }).done(data => {
      setSnackBarInfo({message: `You have been removed from ${data.society.name}`, variant: 'success'})
      joinedSocieties.forEach((joinedSociety, index) => {
        if (joinedSociety.id === data.society.id) {
            joinedSocieties.splice(index, 1)
            setJoinedSocieties(joinedSocieties)
        }
      })
    }).fail(err => {
      setSnackBarInfo({message: 'There was an error while removing you from the society', variant: 'error'})
    });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    
  return(
      <Dashboard>
        <Grid container spacing={4}>
        {joinedSocieties.length === 0 ? (
            <Grid item xs={12}>
              <Card>
                <CardContent>
                <Typography align="center" variant="h5">
                  You are not joined to any societies
                </Typography>
                </CardContent>
                
              </Card>
            </Grid>
        ) : null
        }
        {joinedSocieties.map(society => (
          <SocietyCard 
            key={society.id}
            id={society.id}
            name={society.name} 
            day={society.day}
            start_time={society.start_time}
            end_time={society.end_time}
            location={society.location}
            brief_description={society.brief_description} 
            essentials={society.essentials}
            society_administrator={society.society_administrator}
            onQuit={handleQuit}
             />
            
        ))}

        </Grid>
        {snackBarInfo.variant !== '' ? <CustomizedSnackbar open={open} variant={snackBarInfo.variant} message={snackBarInfo.message} onClose={handleClose}/> : null}
      </Dashboard>
      
  );
}