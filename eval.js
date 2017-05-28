Env = require("./env").Env;
add_globals = require("./env").add_globals;

var global_env = add_globals(Env({ params: [], args: [] }));

var eval = function(x, env) {
    env = env || global_env;
    if (typeof x == 'string') {
        return env.find(x)[x];
    } else if (typeof x == 'number') {
        return x;
    } else if (x[0] == 'quote') {
        return x[1];
    } else if (x[0] == 'if') {
        let test = x[1];
        let conseq = x[2];
        let alt = x[3];
        if (eval(test, env)) {
            return eval(conseq, env);
        } else {
            return eval(alt, env);
        }
    } else if (x[0] == 'set!') {
        env.find(x[1])[x[1]] = eval(x[2], env);
    } else if (x[0] == 'define') {
        let var_ = x[1];
        let exp = x[2];
        env[var_] = eval(exp, env);
        return
    } else if (x[0] == 'lambda') {
        let vars = x[1];
        let exp = x[2];
        return function() {
            return eval(exp, Env({ params: vars, args: arguments, outer: env }));
        }
    } else if (x[0] == 'begin') {
        let val;
        for (let i = 1; i < x.length; i += 1) {
            val = eval(x[i], env);
        }
        return val;
    } else {
        let exps = [];
        for (let j = 0; j < x.length; j += 1) {
            exps[j] = eval(x[j], env);
        }
        let proc = exps.shift();
        return proc.apply(env, exps);
    }
}

module.exports = eval;
