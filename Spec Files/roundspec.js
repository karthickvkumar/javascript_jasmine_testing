describe("Rounding numbers",function(){
	it ("Round up the Value",function(){
	expect (Round_value("Ceil",12.86)).toBeCloseTo(13)
	});

	it("Round down the Value",function() {
	expect (Round_value("Floor",212.3)).toBeCloseTo(212)
	});

	it("Round down an Negative Value",function() {
	expect (Round_value("Floor",-3.4)).toBeCloseTo(-4)
	});

	it("Handling Undefined Values",function() {
	expect (Round_value(undefined)).toBe("Enter Value")
	});
	
	it ("Round up an Negative Value",function(){
	expect (Round_value("Ceil",-12.86)).toBeCloseTo(-12)
	});

});
