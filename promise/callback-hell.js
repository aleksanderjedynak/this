console.log('start!');
setTimeout(function () {
    console.log('ping');
    setTimeout(function () {
        console.log('pong');
        setTimeout(function () {
            console.log('end!');
        }, 1000);
    }, 1000);
}, 1000);
// start!
// after 1 sec: ping
// .. 1 sec later: pong
// .. and: end!