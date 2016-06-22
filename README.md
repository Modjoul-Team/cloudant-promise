# Cloudant-promise
![last-release](https://img.shields.io/github/tag/arypbatista/cloudant-promise.svg)
[![npm-version](https://img.shields.io/npm/v/cloudant-promise.svg)](https://www.npmjs.com/package/cloudant-promise)
[![npm-license](https://img.shields.io/npm/l/cloudant-promise.svg)](https://www.npmjs.com/package/cloudant-promise)
[![Build Status](https://travis-ci.org/arypbatista/cloudant-promise.svg?branch=master)](https://travis-ci.org/arypbatista/cloudant-promise)
[![codecov.io](https://codecov.io/github/arypbatista/cloudant-promise/coverage.svg?branch=master)](https://codecov.io/github/arypbatista/cloudant-promise?branch=master)
[![npm-downloads](https://img.shields.io/npm/dm/cloudant-promise.svg)](https://www.npmjs.com/package/cloudant-promise)

Use Cloudant with promises. Cloudant-promise binds together [`nano-promises`][nano-promises] and [`cloudant`][cloudant].

## Installation

```sh
$ npm install cloudant-promise --save
```

## Usage

```js
const cloudant = require('cloudant-promise');

const credentials = {
  account  : '<account>',
  password : '<password>'
};

const db = cloudant(credentials).db.use('alice');

db.insert({ 'crazy': true }, 'rabbit')
  .then(body => console.log(body))
  .catch(err => console.error(err));
```

## License

This library is licensed under Apache 2.0. Full license text is available in
[COPYING][license]. 

[license]: http://www.apache.org/licenses/LICENSE-2.0
[cloudant]: https://www.npmjs.com/package/cloudant
[nano-promises]: https://www.npmjs.com/package/nano-promises
