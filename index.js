//Root
const bdd = require('express')();
const bodyParser = require('body-parser');

const {createDevice} = require('./models/devices');
const {createMeasure} = require('./models/measures');

bdd.use(bodyParser.urlencoded({extended: false}));

// Parse application/json
bdd.use(bodyParser.json());

bdd.post ('/devices', async (req, res) => {
    console.log(req.body);
    res.end(JSON.stringify(await createDevice(req.body)));
});

bdd.post ('/measures', async (req, res) => {
    console.log(req.body);
    res.end(JSON.stringify(await createMeasure(req.body)));
});

bdd.listen(3000);