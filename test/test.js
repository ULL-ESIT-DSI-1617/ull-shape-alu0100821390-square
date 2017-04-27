'use strict';

let Square = require('../lib/square');

describe ("getArea Square", function() {
	it ("must compute the square area correctly", function() {
		let s = new Square({ width: 100 });
		let result = s.getArea();
		result.should.equal(10000);
	})
});
