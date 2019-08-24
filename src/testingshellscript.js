let shellscript = require('./helpers/gitcommands.js');

let inUsePortPool = [3000,3001]

let newPort = function(inUsePortPool){
    let startport = 3000;
    while(inUsePortPool.includes(startport)){
        startport++
    }
    inUsePortPool.push(startport)
    return startport;
}

let inputObj = {
    repo: 'https://github.com/leeroywking/bad-guy-quotes.git',
    repoName: 'bad-guy-quotes',
    entryPoint:`server.js`
}

inputObj.env += `\nPORT=${newPort(inUsePortPool)}`
console.log(shellscript(inputObj))

inputObj2 = {
    repo:'https://github.com/leeroywking/andy-best-frand.git',
    repoName: 'andy-best-frand',
    entryPoint: `index.js`
}
inputObj2.env += `\nPORT=${newPort(inUsePortPool)}`
console.log(shellscript(inputObj2))