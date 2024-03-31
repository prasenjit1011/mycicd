console.log('\n\n-: App Started :-');

const express   = require('express');
const app       = express();

app.use('/', (req, res, next)=>{
    console.log('-: Welcome :-');
    res.send('-: Welcome :-');
    next();
});

console.log('-:: App Running 3000 :-');
app.listen(3000);
