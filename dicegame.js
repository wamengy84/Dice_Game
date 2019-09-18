"use strict"

function GameMaster(){
	let distanceRemain = 1150;  //overall distances to achieve
	console.log("Make it in the hole in 5. You have " + distanceRemain + " yards remaining.");  
	let introMessage = prompt("Are you ready to roll? Use your Driver off the teebox to start off.");
    
    let driverResult = Drivers();  //distance achieved with 3 sided dice function
    distanceRemain = distanceRemain - driverResult;  //distance update after first roll
    console.log("You hit " +  driverResult + " yards with your driver. You have " + distanceRemain + " yards remaining.");
    console.log("Now that you're on the fairway, let's use your fairway Woods.");
    
    do{
    let woodsResult = Woods();  //distance achieved with 4 sided dice function
    distanceRemain = distanceRemain - woodsResult;  //distance update after roll
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
    console.log("You hit " +  ironsResult + " yards with your irons. You have " + distanceRemain + " yards remaining.");
    	if(distanceRemain <= 300){
    		console.log("You're in range, time to change it up to your pitch wedge.");
    	
    	}  else if(distanceRemain > 350){
    		console.log("You're still out of range. Use the irons one more time.")

    	}
    } while(distanceRemain > 350); //loop back to irons dice function if needed
    
    do{
    let wedgesResult = PWedges();  //distance achieved with 6 sided dice function
    distanceRemain = distanceRemain - wedgesResult;
    console.log("You hit " +  wedgesResult + " yards with your wedge. You have " + distanceRemain + " yards remaining.");
    	if(distanceRemain <= 60){
    		console.log("Simple now, just make a good putt.");
    	
    	}  else{ 
    		console.log("You're still out of range. Use the irons one more time.")
    	}

    } while(distanceRemain > 60);


    let puttResult = Putter();  //distance achieved with 7 sided dice function
    distanceRemain = distanceRemain - puttResult;
    console.log("You hit " +  puttResult + " yards with your putter. You have " + distanceRemain + " yards remaining.");
    console.log("Once last chance to get it in!!!");
    
    let bonusResult = BonusFinalShot();  //results of bonus dice function
    console.log("Thanks for playing, come back again anytime!!!");

}

function rollDie(numberSides){  //overall random number generator function
	let side = Math.floor(Math.random() * numberSides + 1);
	return side;
}

function Drivers(){  //3 sided dice function
		let driverDistance = [400, 300, 200];
		let randomNumberD = rollDie(3);
		let valueGrabD = driverDistance[randomNumberD - 1];
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
	let pWedgeDistance = [225, 200, 175, 150, 125, 100];
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
			console.log("Awesome Shot!!!");
		
		} else if(randomNumberB === 2) {
			console.log("In and Out!!!");

		} else if(randomNumberB === 3) {
			console.log("You need more PRACTICE!!!");
		
		} else if(randomNumberB === 4){
			console.log("Great Shot!!!");
		
		} else if(randomNumberB === 5) {
			console.log("Almost doesn't count!!!");

		} else if(randomNumberB === 6) {
			console.log("Winner!!!");

		} else if(randomNumberB === 7) {
			console.log("Miss by a mile!!!");

		} else if(randomNumberB === 8) {
			console.log("Lucky, in the hole shot!!!");

		}
		
}
		


GameMaster();

