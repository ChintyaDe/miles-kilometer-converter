function convert() {
	//get value
	let value = document.getElementById("value").value;
	
	//get selected units
	const unitFrom = document.getElementById("unit-from");
	const unitTo = document.getElementById("unit-to");
	const miles = document.getElementById("miles");
	const km = document.getElementById("km");
	
	let unitFromValue = unitFrom.value;
	let unitToValue = unitTo.value;
	
	//validate default
	if (unitFromValue === "from") {
		unitFromValue = "miles";
		unitFrom.setAttribute("value", unitFromValue);
		miles.setAttribute("selected", true);
	}
	
	if (unitToValue === "to") {
		unitToValue = "km";
		unitTo.setAttribute("value", unitToValue);
		km.setAttribute("selected", true);
	}
	
	//convert
	let result = value;
	if (unitFromValue !== unitToValue) {
		if (unitFromValue === "miles" && unitToValue === "km") {
			result = result * 1.609;
		}
		else {
			result = result / 1.609;
		}
	}
	
	console.log("converting " + value + " " + unitFromValue + " to " + result + " " + unitToValue + " successful...");
	
	//display result
	const p = document.getElementById("result");
	p.innerHTML = "Result : " + value + " " + unitFromValue + " are " + result + " " + unitToValue;
	
	return 0;
}