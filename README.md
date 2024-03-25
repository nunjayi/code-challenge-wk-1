# code-challenge-wk-1
my first code challenge at moringa school

Challenge 1: Student Grade Generator

Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40.

PSEUDOCODE SOLUTION.


    funtion grade(marks):
		LET grade
		IF: marks > 79
			return grade = 'A'
		IF: marks > 59 AND marks <=79
			return grade = 'B'
		IF: marks > 49 AND marks <=59
			return grade = 'C'
		IF: marks > 39 AND marks <=49
			return grade = 'D'
		IF: marks <=39
			return grade = 'E'
	function validateMarks(marks):
		IF: marks>=0 AND marks<=100
			return	 grade(marks)
		ELSE: alert user 'enter valid marks'
			

Challenge 2: Speed Detector

Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

PSEUDOCODE SOLUTION.

    SPEED DETECTOR
        FUNCTION: speedDetector: INPUT speed:
            demeritPoints = 1*((speed-70)/5)
            IF: speed <=70
                return 'ok'
            ELSE IF:demeritPoints<12
                RETURN: demeritPoints.
            ELSE: demeritPoints >= 12
                RETURN: "License suspended"


Challenge 3: Net Salary Calculator

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

**NB:** Use KRA, NHIF, and NSSF values provided in the link below.

- [KRA Tax Rates](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)
- [NHIF and NSSF rates](https://www.aren.co.ke/payroll/taxrates.htm)

PSEUDOCODE SOLUTION.


    FUNCTION: netSalary
		INPUTS: basicSalary, benefits/allowance
		grossSalary = basicSalary + benefits;
		tax: 
			IF: grossSalary<=24000
				RETURN: basicSalary*0.01
			IF: grossSalary>24000 and <=32,333
				RETURN: basicSalary*0.25
			IF: grossSalary>32,333 and <=500000
				RETURN: basicSalary*0.30
			IF: grossSalary>500000 and <=800000
				RETURN: basicSalary*0.325
			IF: grossSalary>800000
				RETURN: basicSalary*0.35
			
		
		nhif:
			IF:gross<=5999 
			IF:gross>5999&& <=7999 150
			IF:gross>7999&& <=17999
			IF:gross>11,999&& <=11999
			IF:gross>14999&& <=14999
			IF:gross>19999&& <=19999
			IF:gross>24999&& <=24999
			IF:gross>29999&& <=29999
			IF:gross>34999&& <=34999
			IF:gross>39999&& <=39999
			IF:gross>44999&& <=44999
			IF:gross>49999&& <=49999
			IF:gross>59999&& <=59999
			IF:gross>69999&& <=69999
			IF:gross>79999&& <=79999
			IF:gross>89999&& <=89999
			IF:gross>99999&& <=99999
        nssf:
            nssf
            IF: GROSS<=7000
                RETURN: nssf = 0.06*gross
            IF: gross >7000
                RETURN: nssf = 0.06*7000+0.06*(gross-7000)

		netSalaray = gross-(tax(grossSalary)+Nssf(grossSalary)+nhif(grossSalary))
		RETURN netSalary