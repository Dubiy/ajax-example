'use strict';

const
    express = require('express'),
    app = express(),
    http = require('http').Server(app),
    bodyParser = require("body-parser"),
    dateFormat = require('dateformat');
;

http.listen(process.env.PORT || 3000, function() {
    console.log('Listening on:' + (process.env.PORT || 3000));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//sdgdsgsdg


app.use(express.static(__dirname + '/static/'));

app.get('/jquery.js', (req, res) => {
    res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.min.js');
});

app.get('/show-info', (req, res, next) => {
    console.log('New request, yay!');

    if (req.query.mode && req.query.mode === 'give me json') {
        res.json({
            'simple': 'hello',
            'user': req.query.user || '[empty]'
        });
        return;
    }

    let body = `hello<br />

    Now: ${dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss')} <br />

    <hr />

    GET: ${JSON.stringify(req.query)}

    <hr />

    POST: ${1}
    `;

    console.log('GET', req.query);

    res.set({
        'App-Version': '0.01 alpha'
    });

    res.send(body);
});

app.post('/show-info', (req, res) => {
    console.log('New form data, yay!');
    // let search = req.params.search;

    let body = `This is may be another handler<br />

    Form data: ${JSON.stringify(req.body)}
    `;

    console.log('POST', req.body);

    res.set({
        'App-Version': '0.02 alpha'
    });

    res.send(body);
});




// error handling
app.use((req, res, next) => {
    const err = new Error(`Not Found ${req.path}`);
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        return res.status(400).json({error});
    }
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;