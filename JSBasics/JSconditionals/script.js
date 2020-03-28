/* 1.) First exercise in order to pratice .js syntax using conditionals and comparators to
   simply receive grades from students and check for approval
*/

const firstStudent = 'John'; const firstGrade = 13;
const secondStudent = 'Nick' ;const secondGrade = 45;
const lowerLimit = 51;

if(firstGrade >= lowerLimit && secondGrade >= lowerLimit){
    console.log('Both students passed the exam');
}
else if(firstGrade < lowerLimit && secondGrade >= lowerLimit){
    console.log(`Student ${firstStudent} failed the exam with grade ${firstGrade}`);
}
else if(firstGrade >= lowerLimit && secondGrade < lowerLimit){
    console.log(`Student ${secondStudent} failed the exam with grade ${secondGrade}`);
}
else{
    console.log('Both students failed exam')
}

/* 2.) Next one, calculate and store the BMI of the two students and 
compare using a boolean type
*/
var hasHigherBMI = true;
const johnHeight = 1.8; const johnMass = 70;
const nickHeight = 1.76; const nickMass = 67;

function calculateBMI(mass, height){
    return mass/(height*height);
}
var johnBMI = calculateBMI(johnMass,johnHeight);
var nickBMI = calculateBMI(nickMass,nickHeight);
hasHigherBMI = (johnBMI > nickBMI);
console.log(hasHigherBMI);

/* 3.) Exercise manipulating sample arrays and their size and dinamically using
those values in calculating the average of each student and again use of conditinal
to define the winner
*/ 


var johnScores = [89,120,103];
var nickScores = [116,94,123];

var johnAvgScore = 0;
var nickAvgScore = 0;

for(var i = 0; i < johnScores.length;i++){
    johnAvgScore += johnScores[i];
}
johnAvgScore = (johnAvgScore/johnScores.length);
console.log(johnAvgScore);


for(var i = 0; i < nickScores.length;i++){
    johnAvgScore += nickScores[i];    
}
nickAvgScore = (johnAvgScore/nickScores.length);
console.log(nickAvgScore);

if(johnAvgScore > nickAvgScore){
    console.log('John wins');
}
else if(johnAvgScore < nickAvgScore){
    console.log('Nick wins');
}
else{console.log("It's a draw");}
