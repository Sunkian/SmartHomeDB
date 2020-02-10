/*var request = require("request");

var devices = {
    method:'POST',
    url:'http://localhost:3000/devices',
    body:{name: '', brand: '', ecology: ''},
    json: true
};

var measures = {
    method:'POST',
    url:'http://localhost:3000/measures',
    body:{value: '', unity: '', date: '', deviceId: ''},
    json: true
}

request(devices, function(error, response, body){
    if (error) throw new Error(error);
    console.log(body);
});

request(measures, function(error, response, body){
    if (error) throw new Error(error);
    console.log(body);
});


var models = {
    method:'POST',
    url:'http://localhost:3000'
};*/

const rp = require('request-promise');

const requestServer = (path, body) =>
    rp({
        method: 'POST',
        json: true,
        url: `http://localhost:3000${path}`,
        body
    });

requestServer('/devices', {name: '', brand: '', ecology: ''});
requestServer('/measures', {value: '', unity: '', date: '', deviceId: ''});