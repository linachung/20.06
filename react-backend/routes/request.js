var express = require('express');
var router = express.Router();
var request = require('request');
var cookieParser = require('cookie-parser');
const app = express();
const port = 7000;
const api_helper = require('./API_helper');
const options = {
    'method': 'GET',
    'url': 'https://tron.stg.f5net.com/api/v0/users.json',
    'headers': {
    },
    key: 'Is6G92qDn6jXHiG805VTYD8Brt4YI5EtMCd4IKY3pxWUXkL1SpRO1PNlnOTFoFAc',
    agent: false
};

app.use(cookieParser());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/getAPIResponse', (req, res) => {
    //res.cookie('name', 'express').send('iw7aehJD2SwdurgPBdn4KxZJ3GgqQzfO7V2fyBpvmpJexk50SbuS1jP3WgoZ5sRQ');
    api_helper.make_API_call('https://tron.stg.f5net.com/api/v0/users.json')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
});

// request(options, function (error, response) { 
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

app.listen(port, () => console.log(`App listening on port ${port}!`))

//module.exports = router;