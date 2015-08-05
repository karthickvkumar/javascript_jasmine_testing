describe("To convert Celcius to Farnhet",function(){
	it("Mathematical Calculation",function(){
	expect(c(0)).toEqual(32);
	});
	it("Got String value",function(){
	expect(ctof("string")).toEqual("string");
	});
	it("Got Undefined value",function(){
	expect(ctof(NaN)).toEqual(NaN);	
	});

});