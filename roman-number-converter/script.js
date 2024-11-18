const input = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const number = parseInt(input);

if(!number) {
  output.textContent = "Please enter a valid number"
}

if(number < 1) {
   output.textContent = "Please enter a number greater than or equal to 1" 
}

if(number > 3999) {
  output.textContent = "Please enter a number less than or equal to 3999"
} else {
  output.textContent = convertRoman(number)
}

function convertRoman() {
  const roman = []

  let result = ""

}

convertButton.addEventListener('click', convertRoman)