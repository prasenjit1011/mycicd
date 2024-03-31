console.log('\n\n-: App Started :-');

const express   = require('express');
const app       = express();

app.use('/', (req, res, next)=>{
    console.log('-: Welcome 3000:-');
    res.send('-: Welcome 3000:-');
    next();
});

console.log('-:: App Running 3000 :-');
app.listen(3000);
