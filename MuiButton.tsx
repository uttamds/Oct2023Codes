import React from 'react'
import {Stack, Button } from '@mui/material'
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const dummy = () =>{
  alert("hey ")
}

function MuiButton() {


  return (
    <Stack display={'block'} spacing={2} direction={'row'}>
            <Button variant='text'>Text</Button>
            <Button variant='text' href='https://infosys.com'>Infosys Technologies</Button>
            <Button variant='contained'  onClick={dummy} size='small'>Contained</Button>
            <Button variant='outlined' size='large'>Outlined</Button>
            <Button variant='outlined' size='medium'>Medium</Button>
            <IconButton color='warning'>{<SendIcon />}</IconButton>
    </Stack>
  )
}

export default MuiButton
