import { transform } from 'babel-standalone';

const CLASS_PREFIX = 'rxjs';

export const EVENTS = {
  CONSOLE_LOG: `${CLASS_PREFIX}consolelog`
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
    let event = new CustomEvent(EVENTS.CONSOLE_LOG, { detail : {
      args : [err.message.replace(/(?=\d).*(?=\|)/g, function(a) {
        return Number(a.trim()) - 1;
      })]
    }});
    window.dispatchEvent(event);
    return source;
  }
}
