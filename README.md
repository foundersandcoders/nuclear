# nuclear
Super small modular frontend framework.

Taking a lot of tips from React and [Mercury](http://github.com/Raynos/mercury), nuclear is extremely small.

### Example

```js

var nuclear = require('nuclear');
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
