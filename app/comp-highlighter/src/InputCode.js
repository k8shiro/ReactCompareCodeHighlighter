import React from 'react';
import {Card, CardContent, TextField} from '@material-ui/core';

function InputCode(props) {
  return (
    <Card>
      <CardContent>
        <TextField 
          label="language" fullWidth={true} margin="normal" 
          value={props.language} onChange={e => props.setLanguage(e.target.value)} 
        />
        <TextField 
          label="code" fullWidth={true} margin="normal" multiline
          value={props.code} onChange={e => props.setCode(e.target.value)} 
        />
      </CardContent>
    </Card>
  )
}

export default InputCode;
