let shellscript = require('./helpers/gitcommands.js');

let inUsePortPool = [];



let inputObj = {
    repo: 'https://github.com/leeroywking/bad-guy-quotes.git',
    repoName: 'bad-guy-quotes',
    entryPoint:`server.js`,
    env: ``
}

inputObj2 = {
    repo:'https://github.com/leeroywking/andy-best-frand.git',
    repoName: 'andy-best-frand',
    entryPoint: `index.js`,
    env: ``
}

shellscript(inputObj,inUsePortPool).then(res => console.log(res))


shellscript(inputObj2, inUsePortPool).then(res => console.log(res))
