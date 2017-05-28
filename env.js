const op = require("./operators");
console.log(op);
var Env = function(d) {
    var env = {};
    var outer = d.outer || [];
    if (d.parms.length != 0) {
        for (var i = 0; i < d.parms.length; i += 1) {
            env[d.parms[i]] = d.args[i];
        }
    }
    env.find = function(var_) {
        if (env.hasOwnProperty(var_)) {
            return env;
        } else {
            return outer.find(var_)
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
