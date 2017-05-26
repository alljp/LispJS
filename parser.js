const tokenize = function(input) {
    return input.replace(/\(/g, ' ( ')
        .replace(/\)/g, ' ) ')
        .trim()
        .split(/\s+/);
};

const parser = function(tokens) {
    let token = tokens.shift();
    if ('(' === token) {
        let L = [];
        while (')' !== tokens[0]) {
            L.push(parser(tokens));
        }
        tokens.shift();
        return L;
    } else {
        if (')' === token) {
            throw {
                name: 'SyntaxError',
                message: 'unexpected )'
            };
        } else {
            return atom(token);
        }
    }
}

function atom(token) {
    if (isNaN(token)) {
        return token;
    } else {
        return +token;
    }
}

module.exports = {
    parser: parser,
    tokenize: tokenize
}
