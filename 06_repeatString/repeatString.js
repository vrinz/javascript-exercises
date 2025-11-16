const repeatString = function (word, loop) {
	if (loop < 0) {
		return "ERROR";
	}
	let string = "";
    
	for (let i = 0; i < loop; i++) {
		string += word;
	}
	return string;
};

// Do not edit below this line
module.exports = repeatString;
