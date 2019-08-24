
'use strict'
const shell = require('shelljs');

module.exports = function (inputObj, inUsePortPool) {
  return new Promise((res, rej) => {

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
      let startport = 3000;
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
    shell.exec(`nodemon ${inputObj.entryPoint}`, { async: true })
    shell.echo('hey this slot is free')

    res({
      string: `${inputObj.repoName} is running on PORT ${inputObj.env.split('=')[inputObj.env.split('=').length - 1]}`,
      inputObj
    })

  })
};