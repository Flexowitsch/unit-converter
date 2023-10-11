// variables for user input
const userInputContainer = document.getElementById("userInputContainer")
const unitAmountInput = document.getElementById("unitAmount")
const submitButton = document.getElementById("submitButton")
const outputContainer = document.getElementById("outputContainer")
const changeThemeBtn = document.getElementById("changeColor");

//variable data calculated with user input
let userInput = unitAmountInput.value
let meterToFeet = userInput * 3.281
let feetToMeter = userInput / 3.281
let literToGallon = userInput * 0.264
let gallonToLiter = userInput / 0.264
let kiloToPound = userInput * 2.204
let poundToKilo = userInput / 2.204

//create rounded output values
let outputMeterToFeet = meterToFeet.toFixed(2)
let outputFeetToMeter = feetToMeter.toFixed(2)
let outputLiterToGallon = literToGallon.toFixed(2)
let outputGallonToLiter = gallonToLiter.toFixed(2)
let outputKiloToPound = kiloToPound.toFixed(2)
let outputPoundToKilo = poundToKilo.toFixed(2)

//output variables for data in the dom
const outputLength = document.getElementById("outputLength")
const outputVolume = document.getElementById("outputVolume")
const outputMass = document.getElementById("outputMass")


//update the user input variable with the current input
unitAmountInput.addEventListener("input", function() {
    userInput = this.value;   
})



function render() {
    outputLength.textContent = `${userInput} meters = ${outputMeterToFeet} feet | ${userInput} feet = ${outputFeetToMeter} meters`
    outputVolume.textContent = `${userInput} liters = ${outputLiterToGallon} gallons | ${userInput} gallons = ${outputGallonToLiter} liters`
    outputMass.textContent = `${userInput} kilos = ${outputKiloToPound} pounds | ${userInput} pounds = ${outputPoundToKilo} kilos`
}




// logging the calculated values to the console
submitButton.addEventListener("click",function(){
   outputContainer.style.display = "block";
   userInputContainer.style.borderRadius = "0.75rem 0.75rem 0 0"
   render()

    // Use a setTimeout to trigger the fade-in effect
  setTimeout(function() {
    outputContainer.style.opacity = 1; // Set opacity to 1 for a fade-in effect
  }, 100); // Adjust the delay as needed
})

//switching the theme from dark to light
let darkMode = false; // Set the initial value to false

changeThemeBtn.addEventListener('click', () => {
    const root = document.documentElement;
    if (darkMode) { 
        root.style.setProperty('--output-background', '#f4f4f4');
        root.style.setProperty('--conversion-container-bg', '#fff');
        root.style.setProperty('--conversion-headline', 'rgba(90, 83, 123, 1');
        root.style.setProperty('--output-calculation', '#353535');
    } else {
        // Set the variables back to their original values
        root.style.setProperty('--output-background', '#1F2937');
        root.style.setProperty('--conversion-container-bg', '#273549');
        root.style.setProperty('--conversion-headline', '#CCC1FF');
        root.style.setProperty('--output-calculation', '#fff');
    }
    darkMode = !darkMode; // Toggle the dark mode
});


