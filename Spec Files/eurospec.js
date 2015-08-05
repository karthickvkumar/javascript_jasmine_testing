describe("Currecy Exchange to Euro",function() {
		
		it ("Euro to Unites States Doller",function() {
		expect(Curr_conversion("USD",1)).toEqual(0.90);
 		});

		it ("Euro to Indian Rupee",function() {
		expect(Curr_conversion("INR",1)).toEqual(0.014);
		});

		it ("Euro to Russian",function() {
		expect(Curr_conversion("RUB",1)).toEqual(0.016);
	    });

	    it ("Euro to Mexican",function() {
		expect(Curr_conversion("MXN",1)).toEqual(0.057);
	    });

	    it("Euro to Saudi Riyal",function() {
	    expect(Curr_conversion("SAR",1)).toEqual(0.24);
	    });

	    it("Euro code",function() {
	    	expect(Curr_conversion("EUR",1)).toEqual("Correct Currency code");
	    });

});