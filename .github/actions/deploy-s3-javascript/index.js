const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github')
function run(){
    // console.log("Hello world");
    core.notice('Hello from custom js action');
};
run();