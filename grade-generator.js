/**
 * Write a program that prompts the user to input student marks.
 * The input should be between 0 and 100. 
 * Then output the correct grade:

- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40.
 */

function grade( marks){

	let grade
	if(marks>79){
		return grade ='A'}else
	if(marks>59 && marks <=79){
		return grade ='B'}else	
	if(marks>49 && marks <=59){
		return grade ='C'}else
	if(marks>39  && marks <=49){
		return grade ='D'}else
	if(marks<=39){
		return grade ='E'}
}
function valMarks(marks){
	if(marks>=0 && marks <=100){
		return  grade(marks)
	} else{
		return "enter valid marks"
}
}

valMarks(50)
