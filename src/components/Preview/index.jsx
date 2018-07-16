import React from 'react';
import './preview.scss';

class Preview extends React.Component {
  get frameWindow() {
    return this.iframe.contentWindow;
  }

  get frameDoc() {
    return this.iframe.contentWindow.document;
  }

  set() {
    this.frameDoc.open();
    this.frameDoc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Rxjs Playground</title>
        <style>
          body{
            color: black;
            font-family: Arial, Helvetica, sans-serif;
          }
        </style>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.3.0/Rx.min.js" charset="utf-8">
        </script>
      </head>
      <body>
      </body>
    </html>`);
    this.frameDoc.close();
  }

  componentDidMount() {
    this.set();
  }

  render() {
    return (
      <iframe className="iframe-rxjsp" ref={f => this.iframe = f}></iframe>
    );
  }
}

export default Preview;
