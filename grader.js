// Letter Grader

// Write a function letterGrader which takes a test score and returns the equivalent letter grade.

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// letterGrader(98);
// //=> 'A'
// Bonus: Add '+' and '-' grades. So a 98 is actually a A+ and an 80 is a B-

exports.letterGrader = function(testScore){ 
  var letterGrade;
  if (testScore > 89){
    return "A";
  }
  else if (testScore > 79){
    return "B";  
  }
  else if (testScore > 69){
    return "C";    
  }
  else if (testScore > 59){
    return "D";
  }
  else if (testScore >= 0){
    return "F";
  }
  else {
    return "Invalid"
  }

};

// Average
// Write a function 'averageScore` which takes an array of test scores and returns the average score.
// averageScore([90, 95, 87, 60]);
// //=> 83

exports.averageScore = function(arrayOfScores){
  var sum = arrayOfScores.reduce(function(a, b) { return a + b; });
  var avg = sum / arrayOfScores.length;
  return avg;
}








