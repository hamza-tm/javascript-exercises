const reverseString = function(string) {
    return string
        .split("")
        .reduce((reversedString, current) => {
            reversedString.unshift(current);
            return reversedString;
        }, [])
        .join("");
};

module.exports = reverseString;
