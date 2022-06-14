const { program } = require('commander');
const shell = require('shelljs');

program
    .version('0.0.1')
    .description('code-search')
    .option('-env, --environment <environment>', '环境', 'develop')
    .option('-c, --configuration <configuration>')


program.parse(process.argv);
const options = program.opts();
const { configuration, environment } = options;
console.log(options)

shell.exec(`ng serve --configuration ${configuration}`);
