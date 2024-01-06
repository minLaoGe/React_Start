import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Slider from '@mui/material/Slider';
import PopoverMenu from './PopoverMenu';
import ProTip from './ProTip';
import Main from "./main/Main";
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";
import Buttom from "./main/Buttom";
import HomeContext from "./common/home.context";
import {useCreateReducer} from "./hooks/useCreateReducer";
import {HomeInitialState, initialState} from "./common/home.state";



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
    const contextValue = useCreateReducer<HomeInitialState>({
        initialState,
    });
    const {
        state: {
            userInfo
        },
        dispatch
    } = contextValue;
  return (
      <HomeContext.Provider
          value={{
              ...contextValue
          }}
      >
    <div className="h-full p-0 m-0 w-full" >
        <Grid container className='h-full'>
               <Grid container className='h-5/6'>
                       <Main/>
               </Grid>
            <Grid container className='h-1/6'>
                <Buttom/>
            </Grid>

        </Grid>

    </div>
      </HomeContext.Provider>

  );
}
