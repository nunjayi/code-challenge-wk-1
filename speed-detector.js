function speedDetector(speed){
	let demeritPoints =1*((speed-70)/5)
	if(speed<=70){
		return "ok"
	}else if(demeritPoints<12){
		return  demeritPoints
	}else{
			return "License suspended"
	}
}
console.log(speedDetector(60))
console.log(speedDetector(120))
console.log(speedDetector(200))