import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Buttom() {
    
    const send = () => {
      
    }
    return (
        < >
            <Grid item xs={10} >
               <textarea className="h-full w-full">
               </textarea>

            </Grid>

            <Grid item xs={2}>
                <Button variant="contained" sx={{height: '100%'}} fullWidth endIcon={<SendIcon />}>
                    Send
                </Button>
            </Grid>
        </>
    );
}