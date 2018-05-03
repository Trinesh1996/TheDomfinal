//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button


document.addEventListener('DOMContentLoaded', function(){

	var button = document.querySelector("button.button-primary.calculateBtn");
	var data = document.querySelector('.billString');
	var billTotalElement = document.querySelector('.billTotal');

	 	// console.log(billTotalElement);
		// console.log(data);
		// console.log(button);

	button.addEventListener('click', calculateBtnClick);

	function calculateBtnClick(){
		var billString = data.value.trim();
		var billItems = billString.split(",");

		var billTotal = 0;

		for (var i=0; i<billItems.length; i++){
		var bills = billItems[i].trim();

		if (bills === "call"){
			billTotal += 2.75;
		}
		else if (bills ==="sms"){
			billTotal += 0.65;
		}
	}

		var totalCost = billTotal.toFixed(2);
		billTotalElement.innerHTML = totalCost;

		if (totalCost >= 20){
			billTotalElement.classList.add("warning");
		}

		if (totalCost >= 30){
			billTotalElement.classList.add("danger");
		}

		if (totalCost <= 20){
			billTotalElement.classList.remove("warning");
		}

		if (totalCost <= 30){
			billTotalElement.classList.remove("danger");
		}


	}

});
