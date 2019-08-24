let shellscript = require('./helpers/gitcommands.js');

let inUsePortPool = [];



let inputObj = {
    repo: 'https://github.com/leeroywking/bad-guy-quotes.git',
    repoName: 'bad-guy-quotes',
    entryPoint:`server.js`,
    env: ``
}

console.log(shellscript(inputObj,inUsePortPool))

inputObj2 = {
    repo:'https://github.com/leeroywking/andy-best-frand.git',
    repoName: 'andy-best-frand',
    entryPoint: `index.js`,
    env: ``
}
console.log(shellscript(inputObj2, inUsePortPool))
