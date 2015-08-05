describe("TAX CALCULATION",function(){
it("Calculate Tax for general Categories",function(){
expect(Total_tax.calculate("GEN",250000)).toBe(0);
expect(Total_tax.calculate("GEN",500000)).toBe(25750);
expect(Total_tax.calculate("GEN",400000)).toBe(15450);
expect(Total_tax.calculate("GEN",800000)).toBe(87550);
expect(Total_tax.calculate("GEN",1000000)).toBe(128750);
expect(Total_tax.calculate("GEN",600000)).toBe(46350);

});

 
  it("Calculate Tax for Senior Categories",function(){
  expect(Total_tax.calculate("SENIOR",300000)).toBe(0);
  expect(Total_tax.calculate("SENIOR",600000)).toBe(41200);
  expect(Total_tax.calculate("SENIOR",800000)).toBe(82400);
  

 });


  it("Calculate Tax for SuperSenior Categories",function(){
 expect(Total_tax.calculate("SUPERSENIOR",1500000)).toBe(154500);
 expect(Total_tax.calculate("SUPERSENIOR",500000)).toBe(0);

 });

it("Produce the Error Message",function(){
expect(Total_tax.calculate(undefined)).toBe("Enter Correct Value");
});

});

