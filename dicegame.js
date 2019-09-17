"use strict"

function rollDie(numberSides){ //function name(parameter)
	let sides = Math.floor(Math.random() * numberSides + 1)  //var sides = Round #/returns random # between number of sides(+1 includes last #)
		return sides;
}

console.log(rollDie(20));


