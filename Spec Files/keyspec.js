describe("Encryption and Decryption using Key", function() {
    it("Using btoa and atob Method", function() {
        expect(key.inbuilt("Have a Nice Day!")).toEqual('SGF2ZSBhIE5pY2UgRGF5IQ==');
    });
    it("Using AES - Static Cipher Text", function() {
        expect(key.aes_static("Good Morning", "1a2b3c")).toEqual(476f6f64204d6f726e696e67






        	);
    });
});