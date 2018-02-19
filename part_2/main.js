/*
Pseudocode
Enter number into text box and click button
On click, get celsius variable from DOM
Convert celsius variable to farenheit using the formula
celsius * 1.8 + 32 = farenheit
Return and publish farenheit conversion
If the result is >60 change background to red or fire.jpg
If the result is >30 and <60 change background to green.jpg or cool.jpg
If the result is <30 change background to blue or ice.jpg
*/

//on button click, run conversion function
document.querySelector('#convert').addEventListener('click', convertIt)

//conversion function that grabs the number from DOM, converts it,and then displays result
//i am sure there is a way neater way to make this work but i am going with this for now because it actually works

function convertIt () { 
	var cTempVal = parseInt(document.querySelector('#celsius').value);
	var result = (cTempVal * 9/5) + 32;
	document.querySelector('#farenheit').innerHTML = result;
		if (result >60) {
			document.querySelector('body').style.backgroundColor = 'red';
			document.querySelector('#graphic').style.backgroundImage = "url('./fire.jpg')";
		} 		
		else if (result >30 && result <60) {
				document.querySelector('body').style.backgroundColor = 'green';
				document.querySelector('#graphic').style.backgroundImage = "url('./tree.jpg')";
		}
		else if (result <30) {
				document.querySelector('body').style.backgroundColor = 'blue';
				document.querySelector('#graphic').style.backgroundImage = "url('./ice.jpg')";
		}
}


//oh my god, i am literally crying because this worked

