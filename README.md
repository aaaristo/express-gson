express-gson
============

Encode/decode circular javascript object graphs in express request/response

## Installation

```sh
$ npm install body-parser
```

## API

```js
var express    = require('express'),
    bodyParser = require('body-parser'),
    gson       = require('express-gson');

var app = express();

// parse application/json and application/x-www-form-urlencoded
app.use(bodyParser());
app.use(gson());

app.post('/echo',function (req, res)
{
  console.log(req.body) // populated!
  res.send(req.body); // encoded!
})
```

