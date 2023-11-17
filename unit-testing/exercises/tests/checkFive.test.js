const checkFive = require("../checkFive.js");

describe("checkFive", function(){

   test("returns correct feedback for number less than 5", function() {
      let output = checkFive(2)
      expect(output).toBe("2 is less than 5.")
   });
   test ("returns correct feedback for number equal to 5", function(){
    let output = checkFive(5)
    expect(output).toBe("5 is equal to 5.")
   })
   test ("returns correct feedback for number greater than 5", function(){
    let output = checkFive(7)
    expect(output).toBe("7 is greater than 5.")
   })
});
 