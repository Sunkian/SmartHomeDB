const fs  = require('fs-extra');

const main = async () => {
    const datas = await fs.readFile("/Users/alicepagnoux/Downloads/Devices.csv", 'utf8');
    const lines = file.split('\n');
    const columns = lines.shift().split(',');
    const newLines = lines.map(l => l.split(','));
    const formattedLines = newLines.map(([, date, value]) => ({
        measure: value,
        unity: 'kWh',
        date,
        deviceId: '1'
    }));
    console.log(formattedLines.map(x => request('/models/measures', x)));
};

main().then(() => {});

//link d'id au nom du device
//faire un groupby

