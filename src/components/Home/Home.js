import React, { useEffect, useState } from 'react';
import Display from './Display';
import Grid from '@material-ui/core/Grid';

const Home = () => {
    
    const [events,setEvents] = useState([]);
    useEffect(()=>{
        fetch('https://safe-garden-90111.herokuapp.com/photo')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
    return (
        <div>
            <Grid container spacing={8} >
            {
                events.map(event =><Grid item md = {6} xs ={12} lg={3}><Display event={event}></Display></Grid>)
            }
            </Grid>
        </div>
        
    );
};

export default Home;