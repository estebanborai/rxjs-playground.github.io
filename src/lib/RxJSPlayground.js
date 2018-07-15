import { transform } from 'babel-standalone';

const CLASS_PREFIX = 'rxjs';

export const EVENTS = {
  CONSOLE_LOG: `${CLASS_PREFIX}consolelog`,
  COMPILE_ERROR: `${CLASS_PREFIX}compileerror`
};

export function compile(source) {
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

    var event = new CustomEvent(EVENTS.COMPILE_ERROR, { detail : {
      args : [err.message.replace(/(?=\d).*(?=\|)/g, function(a) {
        return Number(a.trim()) - 1;
      })]
    }});
    parent.window.document.dispatchEvent(event);
    return source;
  }
}

