const removeFromArray = function(array, ...values) {
    return array.filter(x => !values.includes(x));
};

module.exports = removeFromArray;
