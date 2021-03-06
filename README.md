# nuclear.js

[![Build Status](https://travis-ci.org/foundersandcoders/nuclear.svg)](https://travis-ci.org/foundersandcoders/nuclear)
[![Code Climate](https://codeclimate.com/github/foundersandcoders/nuclear/badges/gpa.svg)](https://codeclimate.com/github/foundersandcoders/nuclear)
[![Test Coverage](https://codeclimate.com/github/foundersandcoders/nuclear/badges/coverage.svg)](https://codeclimate.com/github/foundersandcoders/nuclear/coverage)

Super small modular frontend framework.

Taking a lot of tips from React and [Mercury](http://github.com/Raynos/mercury), nuclear is extremely small.

### Example

```js

var nuclear = require('nuclear.js');
var h = nuclear.h;

function App () {

  return nuclear.observ('Hello world!');
}

App.render = function (state) {

  return (
    h('h', state())
  );
}

nuclear.app(document.body, App(), App.render);
```
