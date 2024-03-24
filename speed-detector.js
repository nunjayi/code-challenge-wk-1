function speedDetector(speed){
	let demeritPoints 
//check if the driver is speeding 
	if(speed<=70){
		return "ok"
	}else if(demeritPoints<12){//the speed at this point exceeds 70 so we have to find the demeritpoints
		return  demeritPoints = 1*((speed-70)/5)
	}else{//the demerit points have exceed twelve, we suspend the license
			return "License suspended"
	}
}
console.log(speedDetector(60))
console.log(speedDetector(120))
console.log(speedDetector(200))