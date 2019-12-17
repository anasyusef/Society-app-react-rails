import React from 'react';
import Grid from '@material-ui/core/Grid';
import Dashboard from '../Dashboard';
import SocietyCard from './SocietyCard';




export default function JoinedSocieties(props) {
    console.log(props)
    
    return(
        <Dashboard>
          <Grid container spacing={4}>
          {props.joined_societies.map(society => (
            <SocietyCard 
              key={society.id}
              name={society.name} 
              day={society.day}
              start_time={society.start_time}
              end_time={society.end_time}
              location={society.location}
              brief_description={society.brief_description} 
              essentials={society.essentials} />
          ))}

          </Grid>
        </Dashboard>
        
    );
}