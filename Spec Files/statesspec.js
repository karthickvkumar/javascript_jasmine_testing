describe("Currecy exchange to Unites States Doller",function() {
		
		it ("Indian Rupee to US Doller",function() {
		expect(conversion("INR",1)).toEqual(0.016);
 		});

		it ("Euro to US Doller",function() {
		expect(conversion("EUR",1)).toEqual(1.11);
		});

		it ("Russian to US Doller",function() {
		expect(conversion("RUB",1)).toEqual(62.56);
	    });

	    it ("Mexican to US Doller",function() {
		expect(conversion("MXN",1)).toEqual(17.46);
	    });

	    it("Saudi Riyal to US Doller",function() {
	    expect(conversion("SAR",1)).toEqual(4.17);
	    });

	    it("US Doller",function() {
	    	expect(conversion("USD",1)).toEqual("Correct Currency code");
	    });

});