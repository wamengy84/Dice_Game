"use strict"

// function rollDie(numberSides){ //function name(parameter)
// 	let side = Math.floor(Math.random() * numberSides + 1)  //var sides = Round #/returns random # between number of sides(+1 includes last #)
// 		return sides;
// }

// console.log(rollDie(20));

function GameLogic(){
	let distanceRemain = 1150;
	console.log("Make in the hole in 5. You have " + distanceRemain + " yards remaining.")
	let introMessage = prompt("Are you ready to roll?");
    let drvierResult = Drivers();
    distanceRemain = distanceRemain - drvierResult;
    	console.log("You hit " +  drvierResult + " yards with your driver. You have " + distanceRemain + " yards remaining.");

}

function Drivers(){
		let driverDistance = [400, 300, 200];
		let randomNumber = rollDie(3);
		let valueGrab = driverDistance[randomNumber - 1];
		return valueGrab;
}


function rollDie(numberSides){
	let side = Math.floor(Math.random() * numberSides + 1);
	return side;
}

GameLogic();

