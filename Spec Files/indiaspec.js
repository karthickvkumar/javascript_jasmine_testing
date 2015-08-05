describe("Currecy exchange to indian Rupees",function() {
		
		it ("US Doller to Indian Rupee",function() {
		expect(Curr_conversion("USD",1)).toEqual(64.10);
 		});

		it ("Euro to Indian Rupee",function() {
		expect(Curr_conversion("EUR",1)).toEqual(71.14);
		});

		it ("Russian to Indian Rupee",function() {
		expect(Curr_conversion("RUB",1)).toEqual(1.13);
	    });

	    it ("Mexican to Indian Rupee",function() {
		expect(Curr_conversion("MXN",1)).toEqual(4.08);
	    });

	    it("Saudi Riyal to Indian Rupee",function() {
	    expect(Curr_conversion("SAR",1)).toEqual(18);
	    });

	    it("Indian code",function() {
	    	expect(Curr_conversion("INR",1)).toEqual("Correct Currency code");
	    });

});