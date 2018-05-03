// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen



document.addEventListener('DOMContentLoaded', function(){
	var textBillAddBtn = document.querySelector(".addToBillBtn");
	var billText = document.querySelector(".billTypeText");
	var callsTotalElem = document.querySelector(".callTotalOne");
	var smsTotalElem = document.querySelector(".smsTotalOne");
	var totalElem = document.querySelector(".totalOne");

	callsTotalElem.innerHTML = "0.00";
	smsTotalElem.innerHTML = "0.00";
	totalElem.innerHTML = "0.00";


	textBillAddBtn.addEventListener('click', AddAmt);

	var callsTotal = 0;
	var smsTotal = 0;


	function AddAmt(){
		var billInfo = billText.value.trim();

		if(billInfo === "call"){
			callsTotal += 2.75;
		}
		else if(billInfo === "sms"){
			smsTotal += 0.75;
		}

		callsTotalElem.innerHTML = callsTotal.toFixed(2);
		smsTotalElem.innerHTML = smsTotal.toFixed(2);

		var total = callsTotal + smsTotal;
		totalElem.innerHTML = total.toFixed(2);


	if (total >= 30){
		totalElem.classList.add("warning");
	}
	if (total >= 50){
		totalElem.classList.add("danger");
	}

}
});
// WHy does else if not work.
