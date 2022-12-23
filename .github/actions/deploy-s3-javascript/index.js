const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github')
(async ()=>{
    // console.log("Hello world");
    core.notice('Hello from custom js action');
})();