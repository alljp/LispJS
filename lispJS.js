const parse = require("./parser").parse;
const tokenize = require("./parser").tokenize;
const eval = require("./eval");


var repl = function() {
    var stdin = process.stdin;
    var stdout = process.stdout;
    stdin.resume();
    stdout.write(">>>");
    stdin.on('data', function(data) {
        data = data.toString().trim();
        if (data == undefined) {
            stdin.write('>>>');
        }
        var result = eval(parse(tokenize(data)));
        if (result != undefined) {
            stdout.write(result + '\n>>>');
        } else {
            stdout.write('>>>');
        }
    })
}

repl();
