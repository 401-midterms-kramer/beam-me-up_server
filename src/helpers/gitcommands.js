
'use strict'
const shell = require('shelljs');
const child_process = require('child_process')
module.exports = function (inputObj, inUsePortPool) {
  return new Promise((res, rej) => {
    console.log(inUsePortPool)
    if (!shell.which('git')) {
      shell.echo('Sorry, this script requires git');
      shell.exit(1);
    };
    if (!shell.which('npm')) {
      shell.echo('Sorry, this also needs npm in order to work');
      shell.exit(1);
    }
    if (!shell.which('nodemon')) {
      shell.echo('Sorry, this also needs nodemon in order to work');
      shell.exit(1);
    }

    let newPort = function (inUsePortPool) {
      let startport = Math.floor((Math.random()*1000) + 3001); 
      // this is a short term hack to making things work has roughly a 1/1000 chance of failure and is a 'bad solution but this is a placeholder until we get the database up and running'
      while (inUsePortPool.includes(startport)) {
        startport++
      }
      inUsePortPool.push(startport)
      return startport;
    }
    let port = newPort(inUsePortPool);
    inputObj.port = port;
    inputObj.env += `\nPORT=${port}`;

    shell.exec('echo "hello world"');
    shell.cd('~/repofolder');
    shell.exec(`git clone ${inputObj.repo}`);
    shell.cd(`${inputObj.repoName}`);
    shell.exec(`echo "${inputObj.env}" > .env`);
    shell.exec(`npm i`);
    console.log(shell.env);
    shell.env['PORT'] = port
    shell.exec(`nodemon ${inputObj.entryPoint}`, { async: true})
    res({
      string: `${inputObj.repoName} is running on PORT ${inputObj.env.split('=')[inputObj.env.split('=').length - 1]}`,
      inputObj
    })
    rej(err => console.error(err))
  })
};