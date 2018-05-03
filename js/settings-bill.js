// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.



document.addEventListener("DOMContentLoaded", function(){

	// Important DOM elements

	var settingsBillAddBtn = document.querySelector("button.button-primary.settingsBtn");
	var updateSettingsBtn = document.querySelector(".button-primary.updateSettings");
	var setCallsTotalElem = document.querySelector(".callTotalSettings");
	var setSmsTotalElem = document.querySelector(".smsTotalSettings");
	var totalElem = document.querySelector(".totalSettings");
	var updateBtn = document.querySelector(".updateSettings");
	var callCostInput = document.querySelector(".u-full-width.callCostSetting");
	var smsCostInput = document.querySelector(".u-full-width.smsCostSetting");
	var warningLevelSet = document.querySelector(".u-full-width.warningLevelSetting");
 	var criticalLevelSet = document.querySelector(".u-full-width.criticalLevelSetting");

	setCallsTotalElem.innerHTML = "0.00";
	setSmsTotalElem.innerHTML = "0.00";
	totalElem.innerHTML = "0.00";
// Checks

	// console.log(updateBtn);
	// console.log(warningLevel);
	// console.log(criticalLevel);
	// console.log(updateSettingsBtn);
	// console.log(totalElem);
	 // console.log(setSmsTotalElem);
	 // console.log(setCallsTotalElem);
	// console.log(settingsBillAddBtn);
	// console.log(smsCostInput);
 	// console.log(callCostInput);

	updateBtn.addEventListener("click", update)

	// Global variables for settings
	var callCosts = 0;
	var smsCosts = 0;
	var total = 0;
	var criticalLevel = 0;
	var warningLevel = 0;
	var callsTotal = 0;
	var smsTotal = 0;


	function update(){
	callCosts = parseFloat(callCostInput.value);
	smsCosts =  parseFloat(smsCostInput.value);
	warningLevel = parseFloat(warningLevelSet.value);
	criticalLevel = parseFloat(criticalLevelSet.value);


	// console.log(callCosts, smsCosts, warningLevel, criticalLevel);

}


settingsBillAddBtn.addEventListener("click", billAddBtn);
function billAddBtn(){
	var settingRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
	// console.log(settingRadioBtn);
	if (settingRadioBtn){
		var billSettingRadioBtn = settingRadioBtn.value;
		// console.log(billSettingRadioBtn);
		if (billSettingRadioBtn === "call"){
			callsTotal += callCosts;
		}

		else if (billSettingRadioBtn === "sms"){
			smsTotal += smsCosts;
		}

		setCallsTotalElem.innerHTML = callsTotal.toFixed(2);
		setSmsTotalElem.innerHTML = smsTotal.toFixed(2);

		total = callsTotal + smsTotal;
		totalElem.innerHTML = total.toFixed(2);

		if (total >= warningLevel){
			totalElem.classList.add("warning");
		}
		if (total >= criticalLevel){
			totalElem.classList.add("danger");
			settingsBillAddBtn.disabled = true;
		}

		if (total <= warningLevel){
			totalElem.classList.remove("warning");
		}
		if (total <= criticalLevel){
			totalElem.classList.remove("danger");
			settingsBillAddBtn.disabled = false;
		}

	}
}
});
