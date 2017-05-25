var operators = {
    '+': function(a, b) {
        return a + b;
    },
    '-': function(a, b) {
        return a - b;
    },
    '*': function(a, b) {
        return a * b;
    },
    '/': function(a, b) {
        return a / b;
    },
    '%': function(a, b) {
        return a % b;
    },
    '>': function(a, b) {
        return a > b;
    },
    '<': function(a, b) {
        return a < b;
    },
    '<=': function(a, b) {
        return a <= b;
    },
    '>=': function(a, b) {
        return a >= b;
    },

    'eq?': function(a, b) {
        return a == b;
    },
    'equal?': function(a, b) {
        return a === b;
    },
    'not': function(a, b) {
        return !a;
    },
    'number?': function(a) {
        return !isNaN(a);
    },
    'length': function(a) {
        return a.length;
    },
    'cons': function(a, b) {
        var arr = [a];
        return arr.concat(b);
    },
    'cdr': function(a) {
        return a[0];
    },
    'car': function(a) {
        return a.slice(1);
    },
    'append': function(a, b) {
        return a.concat(b);
    },
    'symbol?': function(a) {
        return typeof(a) == 'string';
    },
    'null?': function(a) {
        return !a || a.length == 0;
    }
}

var more_math_operators = ['abs', 'acos', 'asin', 'atan', 'atan2', 'ceil', 'cos', 'exp', 'floor', 'log', 'max', 'min', 'pow', 'random', 'round', 'sin', 'sqrt', 'tan'];

for (let i = 0; i < more_math_operators.length; i++) {
    operators[more_math_operators[i]] = Math[more_math_operators[i]];
}

exports.operators = operators;
