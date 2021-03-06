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

// Median
// Write a function medianScore which takes an array of test scores and calculates the median score. The median is the middle value. If there are an even number of scores, calculate the average of the middle two scores.
// medianScore([52,80,80,86,94])
// //=> 80
exports.medianScore = function(arrayOfScores){
  var scoresAscendOrder = arrayOfScores.sort().reverse();
  if (arrayOfScores.length % 2){
    return scoresAscendOrder[(Math.floor(arrayOfScores.length/2))]
  }
  else 
    return ((scoresAscendOrder[(arrayOfScores.length/2)]) + 
      (scoresAscendOrder[((arrayOfScores.length)/2) -1])) / 2;
}

// Mode
// Write a function modeScore which takes an array of test scores and calculates the mode score. The mode is the value that appears most often.
// modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])
// //=> 92
exports.modeScore = function(arrayOfScores){  
  var count = {};
  var greatestFreq = 0;
  var mode;
  arrayOfScores.forEach(function findMode(number) {
    count[number] = (count[number] || 0) + 1;
    if (greatestFreq < count[number]) {
      greatestFreq = count[number];
      mode = number;
    }
  });
  return mode;
}











