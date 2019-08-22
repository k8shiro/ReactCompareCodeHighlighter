import React, { Component } from 'react';

import InputCode from './InputCode.js'
import ReactSyntaxHighlighterHljsView from './highlight_views/ReactSyntaxHighlighterHljsView.js'
import ReactSyntaxHighlighterPrismView from './highlight_views/ReactSyntaxHighlighterPrismView.js'
import ReactHighlightView from './highlight_views/ReactHighlightView'

class CompareCode extends Component {
  constructor(props){
    super(props);

    this.state = {
      language: 'python',
      code: 'N = int(input())\nA = list(map(int, input().split()))\nans = float(0)\nfor a in A:\n   ans += 1/a\nprint(1/ans)'
    };

    this.setLanguage = this.setLanguage.bind(this);
    this.setCode = this.setCode.bind(this);
  }

  setLanguage(language) {
    this.setState({language: language});
  }

  setCode(code) {
    this.setState({code: code});
  }

  render() {
    return (
      <div>
        <InputCode 
          language={this.state.language} code={this.state.code}
          setLanguage={this.setLanguage} setCode={this.setCode}
        />
        <ReactSyntaxHighlighterHljsView language={this.state.language} code={this.state.code} />
        <ReactSyntaxHighlighterPrismView language={this.state.language} code={this.state.code} />
        <ReactHighlightView language={this.state.language} code={this.state.code} />
      </div>
    );
  }
}

export default CompareCode;
