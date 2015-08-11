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

describe("averageScore", function() {
 it("should return the average score when given an array of scores", function() {
   expect(code.averageScore([90, 95, 87, 60])).toEqual(83);
  });
})

describe("Median Score", function() {
 it("should return the median score when given an array of scores which is odd in quantity", function() {
   expect(code.medianScore([52,80,80,86,94])).toEqual(80);
  });
})

describe("Median Score", function() {
 it("should return the median score when given an array of scores which is even in quantity", function() {
   expect(code.medianScore([10,20,30,40,50,60])).toEqual(35);
  });
})


