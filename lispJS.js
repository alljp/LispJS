const parser = require("./parser").parser;
const tokenize = require("./parser").tokenize

let prompt = function(question, callback) {
    const stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function(data) {
        callback(data.toString().trim());
    });
}



// let paranthesize = function(input, list = []) {
//     let token = input.shift();
//     if (token == undefined) {
//         return list.pop();
//     } else if (token == "(") {
//         list.push(paranthesize(input, []));
//         return paranthesize(input, list);
//     } else if (token == ")") {
//         return list;
//     } else {
//         return paranthesize(input, list.concat(categorize(token)));
//     }
// };

// let categorize = function(input) {
//     if (!isNaN(parseFloat(input))) {
//         return { type: 'literal', value: parseFloat(input) };
//     } else if (input[0] == '"' & input.slice(-1) == '"') {
//         return { type: 'literal', value: input.slice(1, -1) };
//     } else {
//         return { type: 'symbol', value: input };
//     }
// };




prompt(">>",
    function(input) {
        let temp = parser(tokenize(input));
        console.log(temp);
        process.exit();
    });
