import React ,{Component} from 'react';
import { transform } from 'babel-standalone';
import Editor from './editor';
import ConsoleOutput from './consoleOutput';
import Output, {CONSOLE_EVENT} from './output';
import HTMLPane from './html';
import queryString from 'query-string';
import './codemirrorhelper';
import PropTypes from 'prop-types';

function compile(source) {

    let transformed;
    const code = `\n${source}`;
    try {
        transformed = transform(code, {
            filename: 'rxjs',
            "presets": [
                "es2015",
                "stage-0"
            ]
        });

        const transformedCode = transformed.code;
        return transformedCode;
    } catch (err) {

        var event = new CustomEvent(CONSOLE_EVENT, { detail : {
          args : [err.message.replace(/(?=\d).*(?=\|)/g, function(a) {
              return Number(a.trim()) - 1;
          })]
        }});
        parent.window.document.dispatchEvent(event)
        return source;
    }
};

export class Try extends Component{
  static contextTypes = {
    router : PropTypes.any
  }
  componentDidMount(){
    const {html,js} = queryString.parse(this.props.location.search);
    this.context.router.history.push(`/?${queryString.stringify({
      html,
      js
    })}`)
  }
  render(){
    return null;
  }
}
