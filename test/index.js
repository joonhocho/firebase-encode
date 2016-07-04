import {describe, it} from 'mocha';
import {expect} from 'chai';
import {
  encode,
  decode,
  encodeComponents,
  decodeComponents,
} from '../lib';


describe('encode / decode', () => {
  it('encodes and decodes ascii', () => {
    const str = '02/10/2013.$[]#/%234_-!@#$%^&*()0];:\'"`\\=/?+|';
    const encoded = encode(str);

    expect(/[\.\$\[\]#\/]/.test(encoded)).to.be.false;
    expect(decode(encoded)).to.equal(str);
  });

  it('encodes and decodes unicodes', () => {
    const str = '¥¼Ññ⼽파あア㆚㒅';
    const encoded = encode(str);

    expect(/[\.\$\[\]#\/]/.test(encoded)).to.be.false;
    expect(decode(encoded)).to.equal(str);
  });
});


describe('encodeComponents / decodeComponents', () => {
  it('allows /', () => {
    const str = '02/10/2013';
    const encoded = encodeComponents(str);

    expect(encoded).to.equal(str);
    expect(decodeComponents(encoded)).to.equal(str);
  });

  it('encodes and decodes ascii', () => {
    const str = '02/10/2013.$[]#/%234_-!@#$%^&*()0];:\'"`\\=/?+|';
    const encoded = encodeComponents(str);

    expect(/[\.\$\[\]#]/.test(encoded)).to.be.false;
    expect(decodeComponents(encoded)).to.equal(str);
  });

  it('encodes and decodes unicodes', () => {
    const str = '¥¼Ññ⼽파あア㆚㒅';
    const encoded = encodeComponents(str);

    expect(/[\.\$\[\]#]/.test(encoded)).to.be.false;
    expect(decodeComponents(encoded)).to.equal(str);
  });
});
