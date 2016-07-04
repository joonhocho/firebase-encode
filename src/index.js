// http://stackoverflow.com/a/6969486/692528
const escapeRegExp = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

// http://stackoverflow.com/a/19148116/692528
const chars = '.$[]#/%'.split('');
const charCodes = chars.map((c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

const charToCode = {};
const codeToChar = {};
chars.forEach((c, i) => {
  charToCode[c] = charCodes[i];
  codeToChar[charCodes[i]] = c;
});

const charsRegex = new RegExp(`[${escapeRegExp(chars.join(''))}]`, 'g');
const charCodesRegex = new RegExp(charCodes.join('|'), 'g');

const encode = (str) => str.replace(charsRegex, (match) => charToCode[match]);
const decode = (str) => str.replace(charCodesRegex, (match) => codeToChar[match]);


export {
  encode,
  decode,
};

export default {
  encode,
  decode,
};
