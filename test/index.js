import {describe, it} from 'mocha';
import {expect} from 'chai';
import {encode, decode} from '../lib';


describe('encode / decode', () => {
  it('encodes and decodes any string', () => {
    const str = '02/10/2013.$[]#/';
    const encoded = encode(str);

    expect(/[\.\$\[\]#\/]/.test(encoded)).to.be.false;
    expect(decode(encoded)).to.equal(str);
  });

  it('encodes and decodes unicode', () => {
    const str = '¥¼Ññ⼽파あア㆚㒅';
    const encoded = encode(str);

    expect(/[\.\$\[\]#\/]/.test(encoded)).to.be.false;
    expect(decode(encoded)).to.equal(str);
  });
});
