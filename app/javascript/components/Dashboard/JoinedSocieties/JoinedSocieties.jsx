import React from 'react';
import Grid from '@material-ui/core/Grid';
import Dashboard from '../Dashboard';
import SocietyCard from './SocietyCard';




export default function JoinedSocieties() {
    
    return(
        <Dashboard>
          <Grid container spacing={4}>
              <SocietyCard 
              name="Football" 
              day="Tuesday" 
              time="14:00" 
              location="Surrey Sports Park" 
              brief_description="Football practice for the first team" 
              essentials="Remember to bring football kit" />

              <SocietyCard 
              name="Basketball" 
              day="Wednesday" 
              time="16:00" 
              location="Surrey Sports Park" 
              brief_description="Basketball practice for the first team" 
              essentials="Remember to bring basketball kit" />


              <SocietyCard 
              name="Tennis" 
              day="Thursday" 
              time="09:00" 
              location="Surrey Sports Park" 
              brief_description="Tennis practice for the first team" 
              essentials="Remember to bring tennis kit" />

              <SocietyCard 
              name="Football" 
              day="Tuesday" 
              time="14:00" 
              location="Surrey Sports Park" 
              brief_description="Football practice for the first team" 
              essentials="Remember to bring football kit" />

              <SocietyCard 
              name="Basketball" 
              day="Wednesday" 
              time="16:00" 
              location="Surrey Sports Park" 
              brief_description="Basketball practice for the first team" 
              essentials="Remember to bring basketball kit" />

          </Grid>
        </Dashboard>
        
    );
}