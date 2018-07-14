import { transform } from 'babel-standalone';
import './codemirrorhelper';

class RxJSPlayground {
  constructor() {

  }

  compile(source) {
    let transformed;
    const code = `\n${source}`;
    try {
      transformed = transform(code, {
        filename: 'rxjs',
        'presets': [
          'es2015',
          'stage-0'
        ]
      });

      const transformedCode = transformed.code;
      return transformedCode;
    } catch (err) {

      var event = new CustomEvent('playgrounderror', { detail : {
        args : [err.message.replace(/(?=\d).*(?=\|)/g, function(a) {
          return Number(a.trim()) - 1;
        })]
      }});
      parent.window.document.dispatchEvent(event);
      return source;
    }
  }
}

export default RxJSPlayground;
