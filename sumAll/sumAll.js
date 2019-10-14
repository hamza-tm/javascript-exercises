const sumAll = function(x, y) {
    if (x < 0 || y < 0 || typeof x !== "number" || typeof y !== "number") {
        return "ERROR";
    }

    smaller = [x, y].sort()[0];
    larger = [x, y].sort()[1];

    const recursiveSum = (from, to) => {
        if (from === to) return from;
        else return from + recursiveSum(from + 1, to);
    };

    return recursiveSum(smaller, larger);
};

module.exports = sumAll;
