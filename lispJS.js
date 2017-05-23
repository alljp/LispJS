var tokenize = function(input) {
    return input.replace(/\(/g, ' ( ')
        .replace(/\)/g, ' ) ')
        .trim()
        .split(/\s+/);
};

var paranthesize = function(input, list) {
    if (list == undefined) {
        return paranthesize(input, []);
    } else {
        var token = input.shift();
        if (token == undefined) {
            return list.pop();
        } else if (token == "(") {
            list.push(paranthesize(input, []));
            return paranthesize(input, list);
        } else if (token == ")") {
            return list;
        } else {
            return paranthesize(input, list.concat(categorize(token)));
        }
    }
};

var categorize = function(input) {
    if (!isNaN(parseFloat(input))) {
        return { type: 'literal', value: parseFloat(input) };
    } else if (input[0] == '"' & input.slice(-1) == '"') {
        return { type: 'literal', value: input.slice(1, -1) };
    } else {
        return { type: 'symbol', value: input };
    }
};
