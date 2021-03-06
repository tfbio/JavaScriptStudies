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

/* 4.)  One more example of the array usage, with 2 different methods
 for updating an array, = or += and the .push method.
*/ 
var bills = [124, 48, 268];
var tipsArray = [];
function tips(billValue){
    
    if(billValue < 50){
        return (billValue * 0.2);}

     else if(billValue >= 50 && billValue < 200){
        return (billValue * 0.15);}

    else if(billValue >= 200){
        return (billValue * 0.1);}

    else{
        return -1; }   
    
}

for(var i=0; i < bills.length; i++){
    tipsArray.push( tips(bills[i]) );
}
for(var i=0; i < bills.length; i++){
    bills[i] += tipsArray[i];
}

console.log(bills);
console.log(tipsArray);

/** 
 *  5.) Starting out with objects, an object was created for each student
 * containing differents types of var and a method 
*/

var john = {
    fullname: 'John Wilson',
    mass: johnMass,
    height: johnHeight,

    BMI(){
        return this.mass/(this.height*this.height);
    }
}
var nick = {
    fullname: 'Nick Peterson',
    mass: nickMass,
    height: nickHeight,

    BMI(){
        return this.mass/(this.height*this.height);
    }
}
//testing a function to receive a parameter which is an object
function test(person){
    console.log('funciton test was used');
    console.log(person.fullname);
}
test(john);
console.log(nick.BMI());
console.log(john.BMI());
