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
shellscript(inputObj)