console.log('\n\n-: App Started :-');

const express   = require('express');
const app       = express();

app.use('/', (req, res, next)=>{
    console.log('-: Welcome 3000 AB:-');
    res.send('-: Welcome 3000 AC813:-');
    next();
});

console.log('-:: App Running 3000 :-');
app.listen(3000);
