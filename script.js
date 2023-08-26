console.log("Welcome to the Analoge Clock");

var d;
var h;
var m;
var s;

setInterval(() => {
    d = new Date;
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hr = 30 * h + m / 2;
    mr = 6 * m;
    sr = 6 * s;
    // console.log(hr);
    document.getElementById('hours').style.transform = `rotate(${hr}deg)`;
    document.getElementById('min').style.transform = `rotate(${mr}deg)`;
    document.getElementById('seconds').style.transform = `rotate(${sr}deg)`;
}, 1000);