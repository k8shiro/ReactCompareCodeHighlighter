import React from 'react';
import {Card, CardHeader, CardContent } from '@material-ui/core';

function BigCard(props) {
  return (
    <Card style={{backgroundColor: "#eeeeee"}}>
      <CardHeader title={props.title} subheader={props.subheader}/>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  )
}

export default BigCard;
