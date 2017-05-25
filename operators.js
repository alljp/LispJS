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


exports.operators = operators;
