/*
Pseudocode
Enter number into text box and click button
On click, get celsius variable from DOM
Convert celsius variable to farenheit using the formula
celsius * 1.8 + 32 = farenheit
Return and publish farenheit conversion
If the result is >60 change background to red or hot.jpg
If the result is >30 and <60 change background to gray or cool.jpg
If the result is <30 change background to blue or brrr.jpg
*/

//on button click, run conversion function
document.querySelector('#convert').addEventListener('click', convertIt)

//conversion function that grabs the number from DOM, converts it,and then displays result
function convertIt () { 
	var cTempVal = parseInt(document.querySelector('#celsius').value);
	var result = (cTempVal * 9/5) + 32;
	document.querySelector('h1').innerHTML = result;
}


//celsius value conversion
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
	return result;
}

            function convertToF() {
                var cTempVal = parseFloat(document.getElementById('cTemp').value);
                var fTempVal = (cTempVal * (9/5)) + 32;
                document.getElementById('fTemp').value = fTempVal;



//creating the object
var calculator = {
	add: function (num1,num2) {
		return num1 + num2;
},
		return result;
	},
}



function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
}


cToF(60);



//test this shit with a console message

//console.log(celsius(50))



//function changeBlue() {

//change the background color
//document.querySelector("body").style.color = "blue";
// }