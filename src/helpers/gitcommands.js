
'use strict'
module.exports = function(inputObj,inUsePortPool){
const shell = require('shelljs');
 
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
};
if (!shell.which('npm')){
    shell.echo('Sorry, this also needs npm in order to work');
    shell.exit(1);
}
if (!shell.which('nodemon')){
    shell.echo('Sorry, this also needs nodemon in order to work');
    shell.exit(1);
}

let newPort = function(inUsePortPool){
    let startport = 3000;
    while(inUsePortPool.includes(startport)){
        startport++
    }
    inUsePortPool.push(startport)
    return startport;
}

inputObj.env += `\nPORT=${newPort(inUsePortPool)}`;

shell.exec('echo "hello world"');
shell.cd('~/repofolder');
shell.exec(`git clone ${inputObj.repo}`);
shell.cd(`${inputObj.repoName}`);
shell.exec(`echo "${inputObj.env}" > .env`);
shell.exec(`npm i`);
shell.exec(`nodemon ${inputObj.entryPoint}`, {async:true})
shell.echo('hey this slot is free')

return `${inputObj.repoName} is running on PORT ${inputObj.env.split('=')[inputObj.env.split('=').length -1]}`
// Copy files to release dir
/*
shell.rm('-rf', 'out/Release');
shell.cp('-R', 'stuff/', 'out/Release');
 */

// Replace macros in each .js file
/*
shell.cd('lib');
shell.ls('*.js').forEach(function (file) {
  shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
  shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
});
shell.cd('..');
 */

// Run external tool synchronously
/*
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}
*/
}