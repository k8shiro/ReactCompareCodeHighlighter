import React from 'react';
import {Grid} from '@material-ui/core';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {coy, dark, funky, okaidia, solarizedlight, tomorrow, twilight, prism, atomDark, base16AteliersulphurpoolLight, cb, darcula, duotoneDark, duotoneEarth, duotoneForest, duotoneLight, duotoneSea, duotoneSpace, ghcolors, hopscotch, pojoaque, vs, xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeGrid from '../common/CodeGrid.js'
import BigCard from '../common/BigCard.js'


const heighlightStyles = [
  { name: 'coy', style: coy },
  { name: 'dark', style: dark },
  { name: 'funky', style: funky },
  { name: 'okaidia', style: okaidia },
  { name: 'solarizedlight', style: solarizedlight },
  { name: 'tomorrow', style: tomorrow },
  { name: 'twilight', style: twilight },
  { name: 'prism', style: prism },
  { name: 'atomDark', style: atomDark },
  { name: 'base16AteliersulphurpoolLight', style: base16AteliersulphurpoolLight },
  { name: 'cb', style: cb },
  { name: 'darcula', style: darcula },
  { name: 'duotoneDark', style: duotoneDark },
  { name: 'duotoneEarth', style: duotoneEarth },
  { name: 'duotoneForest', style: duotoneForest },
  { name: 'duotoneLight', style: duotoneLight },
  { name: 'duotoneSea', style: duotoneSea },
  { name: 'duotoneSpace', style: duotoneSpace },
  { name: 'ghcolors', style: ghcolors },
  { name: 'hopscotch', style: hopscotch },
  { name: 'pojoaque', style: pojoaque },
  { name: 'vs', style: vs },
  { name: 'xonokai', style: xonokai }
]

function ReactSyntaxHighlighterPrismView(props) {
  return (
    <BigCard title="react-syntax-highlighter(prism)" subheader="https://www.npmjs.com/package/react-syntax-highlighter"> 
      <Grid container spacing={1}>
        {heighlightStyles.map((s) => (
          <CodeGrid title={s.name}>
           <SyntaxHighlighter language={props.language} style={s.style}>
             {props.code}
           </SyntaxHighlighter>
          </CodeGrid>
        ))}
      </Grid>
    </BigCard>
  );
}

export default ReactSyntaxHighlighterPrismView
