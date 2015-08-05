describe("To convert Farnhet to Celcius",function(){
	it("Mathematical Calculation",function(){
	expect(ftoc(32)).toEqual(0);
	});
	it("Got String value",function(){
	expect(ftoc("string")).toEqual("string");
	});
	it("Got Undefined value",function(){
	expect(ftoc(NaN)).toEqual(NaN);	
	});

});