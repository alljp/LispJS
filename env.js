const op = require("./operators");
console.log(op);

const add_globals = function(env) {
    console.log("\nadd_globals\n");
    for (let key in op) {
        console.log(key, op[key]);;
        env[key] = op[key];
    }
    console.log(env);
    console.log("add_globals: env: ", env);
    return env;
}

module.exports = {
    add_globals: add_globals
};
