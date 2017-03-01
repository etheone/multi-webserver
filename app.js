var bouncy = require('bouncy');

bouncy(function (req, bounce) {
    console.log(req.headers.host);
    if (req.headers.host === 'devota.se') {
        bounce(4000);
    }
    else if (req.headers.host === 'e-nilsson.se') {
        bounce(5000);
    }
}).listen(3000);