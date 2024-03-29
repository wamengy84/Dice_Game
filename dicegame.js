"use strict"

function GameMaster(){
	let diceRollCount = 0;
	
	let distanceRemain = 1450;  //overall distances to achieve
	console.log("Make it in the hole in 5. You have " + distanceRemain + " yards remaining.");  
	let introMessage = prompt("Are you ready? Use your Driver off the teebox to start off.");
    
    let driverResult = Drivers();  //distance achieved with 3 sided dice function
    diceRollCount++;   
    distanceRemain = distanceRemain - driverResult;  //distance update after first roll
    console.log("You hit " +  driverResult + " yards with your driver. You have " + distanceRemain + " yards remaining.");
    console.log("Now that you're on the fairway, let's use your fairway Woods.");
    
    do{
    let woodsResult = Woods();  //distance achieved with 4 sided dice function
    distanceRemain = distanceRemain - woodsResult;  //distance update after roll
    diceRollCount++;
    console.log("You hit " +  woodsResult + " yards with your fairway wood. You have " + distanceRemain + " yards remaining.");
    	if(distanceRemain <= 650){ 
    		console.log("You're getting closer to the pin. Let's see if we can get it closer with the irons.");
    	
    	} else if(distanceRemain > 650){
    		console.log("You still have lots of distance to cover. Use your Woods again to cover more ground.")
	
    	}
    } while(distanceRemain > 650); //will loop through again back to woods dice function if needed
    
    do{
    let ironsResult = Irons();  // distance achieved with 5 sided dice function
    distanceRemain = distanceRemain - ironsResult;
    diceRollCount++;
    console.log("You hit " +  ironsResult + " yards with your irons. You have " + distanceRemain + " yards remaining.");
    	if(distanceRemain <= 330){
    		console.log("You're in range, time to change it up to your pitch wedge.");
    	
    	}  else if(distanceRemain >= 350){
    		console.log("You're still out of range. Use the irons one more time.")

    	}
    } while(distanceRemain >= 350); //loop back to irons dice function if needed
    
    do{
    let wedgesResult = PWedges();  //distance achieved with 6 sided dice function
    distanceRemain = distanceRemain - wedgesResult;
    diceRollCount++;
    console.log("You hit " +  wedgesResult + " feet with your wedge. You have " + distanceRemain + " feet remaining.");
    	if(distanceRemain <= 100){
    		console.log("Simple now, just make a good putt.");
    	
    	}  else{ 
    		console.log("You're still out of range. Use the irons one more time.")
    	}

    } while(distanceRemain > 100);


    let puttResult = Putter();  //distance achieved with 7 sided dice function
    distanceRemain = distanceRemain - puttResult;
    diceRollCount++;
    console.log("You hit " +  puttResult + " feet with your putter. You have " + distanceRemain + " feet remaining.");
    console.log("Here's your mulligan shot, One last chance to get it in!!!");
    
    let bonusResult = BonusFinalShot();  //results of bonus dice function
    diceRollCount++ 
    console.log("Thanks for playing, come back again anytime!!!");
alert("Good effort if you made it in at least. If you didn't make it in, better luck next time. If you made it within 5, GREAT JOB!!!");

}




function rollDie(numberSides){  //overall random number generator function
	let side = Math.floor(Math.random() * numberSides + 1);  //rounddown(random#) * #dice sides + 1)
	return side;
}

function Drivers(){  //3 sided dice function
		let driverDistance = [400, 300, 200]; //values assigned to sides
		let randomNumberD = rollDie(3);  //random number generated
		let valueGrabD = driverDistance[randomNumberD - 1]; //array[generated-1]
		return valueGrabD;

}

function Woods(){  //4 sided dice function
	let woodsDistance = [350, 300, 250, 200];
	let randomNumberW = rollDie(4);
	let valueGrabW = woodsDistance[randomNumberW - 1];
	return valueGrabW;
}

function Irons(){  //5 sided dice function
	let ironsDistance = [300, 275, 250, 200, 150];
	let randomNumberI = rollDie(5);
	let valueGrabI = ironsDistance[randomNumberI - 1];
	return valueGrabI;
}

function PWedges(){  //6 sided dice function
	let pWedgeDistance = [175, 150, 125, 100, 75, 60];
	let randomNumberPW = rollDie(6);
	let valueGrabPW = pWedgeDistance[randomNumberPW - 1];
	return valueGrabPW;
}

function Putter(){  //7 sided dice function
	let putterDistance = [60, 50, 40, 30, 20, 10, 5];
	let randomNumberP = rollDie(7);
	let valueGrabP = putterDistance[randomNumberP - 1];
	return valueGrabP;
}

function BonusFinalShot(){  //8 sided dice function 
	let randomNumberB = rollDie(8);
		if(randomNumberB === 1) {
			console.log("In!!! Just An Awesome Shot!!!");
		
		} else if(randomNumberB === 2) {
			console.log("Just In And Out!!!");

		} else if(randomNumberB === 3) {
			console.log("Miss It, You Need More PRACTICE!!!");
		
		} else if(randomNumberB === 4){
			console.log("WOW It Went In, Great Shot!!!");
		
		} else if(randomNumberB === 5) {
			console.log("Ouch!!! Almost Doesn't Count!!!");

		} else if(randomNumberB === 6) {
			console.log("And It's In, Winner!!!");

		} else if(randomNumberB === 7) {
			console.log("You Miss It By A Mile!!!");

		} else if(randomNumberB === 8) {
			console.log("Lucky, In The Hole Shot!!!");

		}

}

GameMaster();

