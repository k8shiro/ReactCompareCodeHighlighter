import React from 'react';
import {Grid} from '@material-ui/core';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, a11yLight, agate, anOldHope, androidstudio, arduinoLight, arta, ascetic, atelierCaveDark, atelierCaveLight, atelierDuneDark, atelierDuneLight, atelierEstuaryDark, atelierEstuaryLight, atelierForestDark, atelierForestLight, atelierHeathDark, atelierHeathLight, atelierLakesideDark, atelierLakesideLight, atelierPlateauDark, atelierPlateauLight, atelierSavannaDark, atelierSavannaLight, atelierSeasideDark, atelierSeasideLight, atelierSulphurpoolDark, atelierSulphurpoolLight, atomOneDarkReasonable, atomOneDark, atomOneLight, brownPaper, codepenEmbed, colorBrewer, darcula, dark, darkula, defaultStyle, docco, dracula, far, foundation, githubGist, github, gml, googlecode, grayscale, gruvboxDark, gruvboxLight, hopscotch, hybrid, idea, irBlack, isblEditorDark, isblEditorLight, kimbieDark, kimbieLight, lightfair, magula, monoBlue, monokaiSublime, monokai, nord, obsidian, ocean, paraisoDark, paraisoLight, pojoaque, purebasic, qtcreatorDark, qtcreatorLight, railscasts, rainbow, routeros, schoolBook, shadesOfPurple, solarizedDark, solarizedLight, sunburst, tomorrowNightBlue, tomorrowNightBright, tomorrowNightEighties, tomorrowNight, tomorrow, vs, vs2015, xcode, xt256, zenburn } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import CodeGrid from '../common/CodeGrid.js'
import BigCard from '../common/BigCard.js'


const heighlightStyles = [
  { name: 'a11yDark', style: a11yDark },
  { name: 'a11yLight', style: a11yLight },
  { name: 'agate', style: agate },
  { name: 'anOldHope', style: anOldHope },
  { name: 'androidstudio', style: androidstudio },
  { name: 'arduinoLight', style: arduinoLight },
  { name: 'arta', style: arta },
  { name: 'ascetic', style: ascetic },
  { name: 'atelierCaveDark', style: atelierCaveDark },
  { name: 'atelierCaveLight', style: atelierCaveLight },
  { name: 'atelierDuneDark', style: atelierDuneDark },
  { name: 'atelierDuneLight', style: atelierDuneLight },
  { name: 'atelierEstuaryDark', style: atelierEstuaryDark },
  { name: 'atelierEstuaryLight', style: atelierEstuaryLight },
  { name: 'atelierForestDark', style: atelierForestDark },
  { name: 'atelierForestLight', style: atelierForestLight },
  { name: 'atelierHeathDark', style: atelierHeathDark },
  { name: 'atelierHeathLight', style: atelierHeathLight },
  { name: 'atelierLakesideDark', style: atelierLakesideDark },
  { name: 'atelierLakesideLight', style: atelierLakesideLight },
  { name: 'atelierPlateauDark', style: atelierPlateauDark },
  { name: 'atelierPlateauLight', style: atelierPlateauLight },
  { name: 'atelierSavannaDark', style: atelierSavannaDark },
  { name: 'atelierSavannaLight', style: atelierSavannaLight },
  { name: 'atelierSeasideDark', style: atelierSeasideDark },
  { name: 'atelierSeasideLight', style: atelierSeasideLight },
  { name: 'atelierSulphurpoolDark', style: atelierSulphurpoolDark },
  { name: 'atelierSulphurpoolLight', style: atelierSulphurpoolLight },
  { name: 'atomOneDarkReasonable', style: atomOneDarkReasonable },
  { name: 'atomOneDark', style: atomOneDark },
  { name: 'atomOneLight', style: atomOneLight },
  { name: 'brownPaper', style: brownPaper },
  { name: 'codepenEmbed', style: codepenEmbed },
  { name: 'colorBrewer', style: colorBrewer },
  { name: 'darcula', style: darcula },
  { name: 'dark', style: dark },
  { name: 'darkula', style: darkula },
  { name: 'defaultStyle', style: defaultStyle },
  { name: 'docco', style: docco },
  { name: 'dracula', style: dracula },
  { name: 'far', style: far },
  { name: 'foundation', style: foundation },
  { name: 'githubGist', style: githubGist },
  { name: 'github', style: github },
  { name: 'gml', style: gml },
  { name: 'googlecode', style: googlecode },
  { name: 'grayscale', style: grayscale },
  { name: 'gruvboxDark', style: gruvboxDark },
  { name: 'gruvboxLight', style: gruvboxLight },
  { name: 'hopscotch', style: hopscotch },
  { name: 'hybrid', style: hybrid },
  { name: 'idea', style: idea },
  { name: 'irBlack', style: irBlack },
  { name: 'isblEditorDark', style: isblEditorDark },
  { name: 'isblEditorLight', style: isblEditorLight },
  { name: 'kimbieDark', style: kimbieDark },
  { name: 'kimbieLight', style: kimbieLight },
  { name: 'lightfair', style: lightfair },
  { name: 'magula', style: magula },
  { name: 'monoBlue', style: monoBlue },
  { name: 'monokaiSublime', style: monokaiSublime },
  { name: 'monokai', style: monokai },
  { name: 'nord', style: nord },
  { name: 'obsidian', style: obsidian },
  { name: 'ocean', style: ocean },
  { name: 'paraisoDark', style: paraisoDark },
  { name: 'paraisoLight', style: paraisoLight },
  { name: 'pojoaque', style: pojoaque },
  { name: 'purebasic', style: purebasic },
  { name: 'qtcreatorDark', style: qtcreatorDark },
  { name: 'qtcreatorLight', style: qtcreatorLight },
  { name: 'railscasts', style: railscasts },
  { name: 'rainbow', style: rainbow },
  { name: 'routeros', style: routeros },
  { name: 'schoolBook', style: schoolBook },
  { name: 'shadesOfPurple', style: shadesOfPurple },
  { name: 'solarizedDark', style: solarizedDark },
  { name: 'solarizedLight', style: solarizedLight },
  { name: 'sunburst', style: sunburst },
  { name: 'tomorrowNightBlue', style: tomorrowNightBlue },
  { name: 'tomorrowNightBright', style: tomorrowNightBright },
  { name: 'tomorrowNightEighties', style: tomorrowNightEighties },
  { name: 'tomorrowNight', style: tomorrowNight },
  { name: 'tomorrow', style: tomorrow },
  { name: 'vs', style: vs },
  { name: 'vs2015', style: vs2015 },
  { name: 'xcode', style: xcode },
  { name: 'xt256', style: xt256 },
  { name: 'zenburn', style: zenburn }
]

function ReactSyntaxHighlighterHljsView(props) {
  return (
    <BigCard title="react-syntax-highlighter(hljs)" subheader="https://www.npmjs.com/package/react-syntax-highlighter"> 
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

export default ReactSyntaxHighlighterHljsView
