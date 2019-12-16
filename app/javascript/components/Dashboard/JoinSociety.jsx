import React from 'react';
import Dashboard from './Dashboard';
import JoinSocietyForm from './JoinSocietyForm'
import Auth from 'j-toker'

export default function JoinSociety(props) {
    return(
        <Dashboard>
            <JoinSocietyForm societies={props.societies} />
        </Dashboard>
    );
}