var config=require("./config.js");
var gitlabhook = require('gitlabhook');
var pull = require("./pull");

var gitlab = gitlabhook({
    "host" : config.host,
    "port" : config.port
}, function (data) {
    pull(data.repository.name);
});

console.log('Server listen on '+config.port);
gitlab.listen();
