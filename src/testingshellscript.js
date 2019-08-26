let shellscript = require('./helpers/gitcommands.js');

let inUsePortPool = [];



let inputObj = {
    repo: 'https://github.com/leeroywking/bad-guy-quotes.git',
    repoName: 'bad-guy-quotes',
    entryPoint:`server.js`,
    env: ``
}

let inputObj2 = {
    repo:'https://github.com/leeroywking/andy-best-frand.git',
    repoName: 'andy-best-frand',
    entryPoint: `index.js`,
    env: ``
}

shellscript(inputObj,inUsePortPool).then(res => console.log(res))


shellscript(inputObj2, inUsePortPool).then(res => console.log(res))

/*
echo '{"repo": "https://github.com/leeroywking/bad-guy-quotes.git","repoName": "bad-guy-quotes","entryPoint":"server.js","env": ""}' | http POST ec2-34-211-96-238.us-west-2.compute.amazonaws.com:3000/launch -a lee:lee

echo '{"repo": "https://github.com/leeroywking/andy-best-frand.git","repoName": "andy-best-frand","entryPoint": "index.js","env": ""}' | http POST :3000/launch -a lee:lee
*/