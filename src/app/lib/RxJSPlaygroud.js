import { transform } from 'babel-standalone';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromEvent';

class RxJSPlayground {
  static RXJSP_EVENT = 'rxjsplayground';

  constructor() {
    this.state$ = Observable.fromEvent(document, RxJSPlayground.RXJSP_EVENT); 
    this.frameWindow = this.iframe && this.iframe.contentWindow.document;
    this.console = [];
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
      return transformed.code;
    } catch (err) {
      console.error('Everything is Broken!');
    }
  }

  setOutput() {
    this.frameWindow.open();
    this.frameWindow.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Rxjs Playground</title>
        <style>
          html,body{
            background : white;
          }
        </style>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.3.0/Rx.min.js" charset="utf-8"></script>
      </head>
      <body>

      </body>
    </html>
    `);
    this.frameWindow.close();
  }

  updateOutput() {
    this.frameWindow.body.innerHTML = (`
      <div id="core">
        ${this.context.html}
      </div>
    `);

    const exp = (`
    let console = {
      log: function() {
        let event = new CustomEvent("${RxJSPlayground.RXJSP_EVENT}",
          {
            detail: {
              args: Array.from(arguments)
            }
          }
        );
        parent.window.document.dispatchEvent(event)
      }
    };
    ${this.context.output}
    `);

    try {
      this.frameWindow.eval(exp);
    } catch (err) {
      document.dispatchEvent(new CustomEvent(RxJSPlayground.RXJSP_EVENT, {
        detail: {
          args: [err]
        }
      }));
    }
  }
}

export default RxJSPlayground;
