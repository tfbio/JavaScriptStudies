/* First exercise in order to pratice .js syntax using conditionals and comparators
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

