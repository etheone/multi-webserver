var bouncy = require('bouncy');

var server = bouncy(function (req, res, bounce) {
    console.log(host);
    console.log(req.headers);
    var host = req.headers.host;
    if (host === 'devota.se' || host == 'www.devota.se') {
        bounce(4000);
    } else if (host === 'e-nilsson.se' || host == 'www.e-nilsson.se') {
        bounce(5000);
    } else {
        res.statusCode = 404;
        res.end('no such host');
    }
});
server.listen(3000);