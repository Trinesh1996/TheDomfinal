
// // console.dir(document); 
// // console.log(document.body);
// // console.log(document.links);
// // console.log(document.head);
// // console.log(document.button);

// // GET ELEMENT BY ID //

// var boxItem = document.getElementsByClassName('eight columns');
// console.log(boxItem);

// var six = document.getElementsByClassName('six columns');
// console.log(six);

// var matches = document.querySelectorAll("i");
// console.log(matches);

// //var bill = document.querySelector("calculateBtn");

// var container = document.querySelectorAll("div.highlighted > p");
// console.log(container);

// var containers = document.getElementsByClassName('container');
// console.log(containers);



// //for(var i=0; i<containers.length; i++){
// 	containers[i].style.backgroundColor = '#ddd';
// //};

var button = document.querySelector("button.button-primary.calculateBtn");
var data = document.querySelector('.billString');

console.log(data);
console.log(button);

button.addEventListener('click', calculateBtnClick);


function calculateBtnClick(x){

	var billString = data.value;
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

	var rounded = billTotal.toFixed(2);
	billTotalElement.innerHtml = rounded;
};

	
