const repeatString = function(string, numRepeats) {
    if (numRepeats < 0) {
        return "ERROR"
    }

    let output = "";
    for (let i = 0; i < numRepeats; i++) {
        output += string;
    }
    return output;
}

module.exports = repeatString
