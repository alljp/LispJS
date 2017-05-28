const op = require("./operators");
console.log(op);
var Env = function(dict) {
    var env = {};
    var outer = dict.outer || [];
    if (dict.parms.length != 0) {
        for (let i = 0; i < dict.parms.length; i += 1) {
            env[dict.parms[i]] = dict.args[i];
        }
    }
    env.find = function(x) {
        if (env.hasOwnProperty(x)) {
            return env;
        } else {
            return outer.find(x)
        }
    }
    return env;
}



const add_globals = function(env) {
    console.log("\nadd_globals\n");
    for (let key in op) {
        console.log(key, op[key]);;
        env[key] = op[key];
    }
    console.log(env);
    // console.log(op);

    console.log("add_globals: env: ", env);
    return env;
}

module.exports = {
    Env: Env,
    add_globals: add_globals
};
