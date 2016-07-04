# firebase-encode
[![Build Status](https://travis-ci.org/joonhocho/firebase-encode.svg?branch=master)](https://travis-ci.org/joonhocho/firebase-encode)
[![Coverage Status](https://coveralls.io/repos/github/joonhocho/firebase-encode/badge.svg?branch=master)](https://coveralls.io/github/joonhocho/firebase-encode?branch=master)
[![npm version](https://badge.fury.io/js/firebase-encode.svg)](https://badge.fury.io/js/firebase-encode)
[![Dependency Status](https://david-dm.org/joonhocho/firebase-encode.svg)](https://david-dm.org/joonhocho/firebase-encode)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

Encode (escape) and decode firebase key string to avoid unexpected results.

Checkout [firebase-encode](https://github.com/joonhocho/firebase-encode) for validating string inputs.


### Install
```
npm install --save firebase-encode
```


### Usage
```javascript
import {
  encode,
  decode,
} from 'firebase-encode';

// safe encodes to 02%2F10%2F2013%2E%24%5B%5D%23%2F%25234_-!@%23%24%25^&*()0%5D;:'"`\=%2F?+|.
const encoded = encode('02/10/2013.$[]#/%234_-!@#$%^&*()0];:\'"`\\=/?+|');

// now is a safe child key.
firebaseRef.child(encoded).set(true);
```


### Credits
http://stackoverflow.com/a/19148116/692528


### License
```
The MIT License (MIT)

Copyright (c) 2016 Joon Ho Cho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
