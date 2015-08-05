describe("Format Date using Moment.js", function() {
    it("Comparision with Today date", function() {
        expect(mm()).toEqual("Jun 5th 15");
    });
        it("Different Format", function() {
        expect(mm()).not.toEqual("5th Jun 15");
    });
        it("Pattern Match", function() {
        expect("MMM Do YY").toMatch("MMM Do YY");
    });
        it("Contains Date", function() {
        expect(mm()).toContain("5th");
    });
          it("Contains Month", function() {
        expect(mm()).toContain("Jun");
    });
            it("Contains year", function() {
        expect(mm()).toContain("15");
    });

});