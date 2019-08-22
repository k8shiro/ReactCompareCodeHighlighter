import React from 'react';
import {Grid} from '@material-ui/core';

import Highlight from 'react-highlight.js'

import CodeGrid from '../common/CodeGrid.js'
import BigCard from '../common/BigCard.js'


function ReactHighlightView(props) {
  return (
    <BigCard title="react-highlight.js" subheader="http://bvaughn.github.io/react-highlight.js/"> 
      <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
      <Grid container spacing={1}>
        <CodeGrid title="">
         <Highlight language={props.language}>
           {props.code}
         </Highlight>
        </CodeGrid>
      </Grid>
    </BigCard>
  );
}

export default ReactHighlightView
