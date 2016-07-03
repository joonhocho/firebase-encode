// http://stackoverflow.com/a/19148116/692528
const dots = /\./g;
const escapedDot = '%2E';

const encode = (str) => encodeURIComponent(str).replace(dots, escapedDot);
const decode = (str) => decodeURIComponent(str.replace(escapedDot, '.'));


export {
  encode,
  decode,
};

export default {
  encode,
  decode,
};
