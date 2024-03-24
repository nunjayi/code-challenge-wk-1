////taxes 
function netSalary(basic,benefits){
	let tax,nhif,net,nssf
//finding the gross salary
	gross=basic+benefits
//finding paye
	tax = (gross)=>{
		if(gross<=24000){
			return gross*0.01
		}else 
		if(gross>24000 && gross<=32333){
			return gross*0.25
		}else
		if(gross>32333 && gross<=500000){
			return gross*0.30
		}else
		if(gross>500000 && gross<=800000){
			return gross*0.325
		}else
		if(gross>800000){
			return gross*0.35
		}

	}
//finding nhif deductions.
	nhif=(gross)=>{
		if(gross<=5999){
			return 150
		}else
		if(gross>5999 && gross<=7999){
			return 300
		}else
		if(gross> 7999&& gross<=11999){
			return 400
		}else
		if(gross>11999 && gross<=14999){
			return 500
		}else
		if(gross> 14999&& gross<=19999){
			return 600
		}else
		if(gross> 19999&& gross<=24999){
			return 750
		}else
		if(gross> 24999&& gross<=34999){
			return 850
		}else
		if(gross> 34999&& gross<=39999){
			return 900
		}else
		if(gross> 39999&& gross<=44999){
			return 1000
		}else
		if(gross> 44999&& gross<=49999){
			return 1100
		}else
		if(gross> 49999&& gross<=59999){
			return 1200
		}else
		if(gross>59999 && gross<=69999){
			return 1300
		}else
		if(gross>69999 && gross<=79999){
			return 1400
		}else
        if(gross>79999 && gross<=89999){
            return 1500
        }else
        if(gross>89999 && gross<=99999){
            return 1600
        }else
        if(gross>99999){
            return 1700
        }
	}
//finding the nssf deductions
    nssf=(gross)=>{
    let nssf
    if(gross<=7000){
        nssf = 0.06* gross
        return nssf
    }else if(gross>7000){
        nssf = 0.06*7000 + 0.06*(gross-7000)
        return nssf
    }

}

// finding the net salary
net = gross -(tax(gross)+nhif(gross)+nssf(gross))
return net

}
console.log(netSalary(50000,6000))

