"use strict"

// function rollDie(numberSides){ //function name(parameter)
// 	let side = Math.floor(Math.random() * numberSides + 1)  //var sides = Round #/returns random # between number of sides(+1 includes last #)
// 		return sides;
// }

// console.log(rollDie(20));

function GameLogic(){
	let distanceRemain = 1150;
	console.log("Make it in the hole in 5. You have " + distanceRemain + " yards remaining.");
	let introMessage = prompt("Are you ready to roll? Use your Driver off the teebox to start off.");
    let driverResult = Drivers();
    distanceRemain = distanceRemain - driverResult;
    console.log("You hit " +  driverResult + " yards with your driver. You have " + distanceRemain + " yards remaining.");
    console.log("Now that you're on the fairway, let's use your fairway Woods.");
    let woodsResult = Woods();
    distanceRemain = distanceRemain - woodsResult;
    console.log("You hit " +  woodsResult + " yards with your fairway wood. You have " + distanceRemain + " yards remaining.");
}

function Woods(){
	let woodsDistance = [350, 300, 250, 200];
	let randomNumberW = rollDie(4);
	let valueGrabW = woodsDistance[randomNumberW - 1];
	return valueGrabW;
}

function Drivers(){
		let driverDistance = [400, 300, 200];
		let randomNumberD = rollDie(3);
		let valueGrabD = driverDistance[randomNumberD - 1];
		return valueGrabD;
}


function rollDie(numberSides){
	let side = Math.floor(Math.random() * numberSides + 1);
	return side;
}

GameLogic();

