import React from 'react';
import {Card, CardHeader, CardContent, Grid } from '@material-ui/core';

function CodeGrid(props) {
  return (
    <Grid item lg={4} sm={6}>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>
          {props.children}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CodeGrid;
