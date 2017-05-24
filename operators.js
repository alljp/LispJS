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
    'abs': function(a) {
        return Math.abs(a);
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
    }
}


exports.operators = operators;
