describe("MD5 Checksmum of string", function() {
    it("Generation of MD5 Cipher text", function() {
        expect(message("karthick")).toMatch('8505ce4b684142c4fa246fcbd82d8237');
    });
});