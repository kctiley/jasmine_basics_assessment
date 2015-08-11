var code = require('../grader.js');



describe("Letter Grader", function() {
 it("should return 'A' when a test score is greater than 89", function() {
   expect(code.letterGrader(95)).toEqual("A");
  });
})

describe("Letter Grader", function() {
 it("should return 'B' when a test score is greater than 79 and less than 90", function() {
   expect(code.letterGrader(85)).toEqual("B");
  });
})

describe("Letter Grader", function() {
 it("should return 'C' when a test score is greater than 69 and less than 80", function() {
   expect(code.letterGrader(71)).toEqual("C");
  });
})

describe("Letter Grader", function() {
 it("should return 'D' when a test score is greater than 59 and less than 70", function() {
   expect(code.letterGrader(68)).toEqual("D");
  });
})

describe("Letter Grader", function() {
 it("should return 'F' when a test score is greater than 0 and less than 60", function() {
   expect(code.letterGrader(58)).toEqual("F");
  });
})


