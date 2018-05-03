// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


document.addEventListener('DOMContentLoaded', function(){


	var radioBillAddBtn = document.querySelector(".billItemTypeRadio");
	var radioBillAddBtn = document.querySelector("button.button-primary.radioBillAddBtn");
	var callTotalElem = document.querySelector(".callTotalTwo");
	var smsTotalElem = document.querySelector(".smsTotalTwo");
	var mainTotalElem = document.querySelector(".totalTwo");

	callTotalElem.innerHTML = "0.00";
	smsTotalElem.innerHTML = "0.00";
	mainTotalElem.innerHTML = "0.00";


	// console.log(radioBillAddBtn);
	 // console.log(itemTypeCall);
	 // console.log(itemTypeSms);
	// console.log(mainTotal);
	 // console.log(smsTotalElem);
	// console.log(callTotal);

	radioBillAddBtn.addEventListener("click", addBtn);

	var calls = 0;
	var smss = 0;

	function addBtn(){

		var radioBtn = document.querySelector("input[name='billItemType']:checked");
		//console.log(radioBtn)


		if (radioBtn){
	 	var billItemType = radioBtn.value;
	 	//console.log(billItemType);


	 	if (billItemType === "call"){
	 		calls += 2.75
		}
		else if(billItemType === "sms"){
			smss += 0.75
		}

		callTotalElem.innerHTML = calls.toFixed(2);
		smsTotalElem.innerHTML = smss.toFixed(2);
		var total = smss + calls;
		mainTotalElem.innerHTML = total.toFixed(2);

		if(total > 30){
			mainTotalElem.classList.add("warning");
		}
		if (total > 50){
			mainTotalElem.classList.add("danger");
		}

	 }
 }


});
