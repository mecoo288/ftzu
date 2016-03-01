var fis = module.exports = require('fis3');
fis.require.prefixes.unshift('ftzu');

fis.cli.name = 'ftzu';
fis.cli.info = require('./package.json');
console.log(fis.version);
fis.cli.version = function(){
    var content = [
        'fis ' + fis.version,
        'ftzu ' + fis.cli.info.version
    ].join('\n');
    console.log(content);
};
