function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	return a.reduce((total, num) => {
		return total + num;
	}, 0);
}

function multiply (a) {
	return a.reduce((total, num) => {
		return total * num;
	}, 1);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	let value = 1;
	if (a == 0) {
		return value;
	};
	while (a > 0) {
		value *= a;
		a--;
	};
	return value;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}