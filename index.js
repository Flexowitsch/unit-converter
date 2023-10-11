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

//setting a variable for the switch of the themes
let darkTheme = true

//update the user input variable with the current input
unitAmountInput.addEventListener("input", function() {
    userInput = this.value;   
})

// update the dark theme Variable
changeThemeBtn.addEventListener("click", function(){
    darkTheme = darkTheme ? false : true
})

function render() {
    outputLength.textContent = `${userInput} meters = ${outputMeterToFeet} feet | ${userInput} feet = ${outputFeetToMeter} meters`
    outputVolume.textContent = `${userInput} liters = ${outputLiterToGallon} gallons | ${userInput} gallons = ${outputGallonToLiter} liters`
    outputMass.textContent = `${userInput} kilos = ${outputKiloToPound} pounds | ${userInput} pounds = ${outputPoundToKilo} kilos`
}

function setTheme() {
    let root = document.documentElement;
    if (darkTheme === false) {
        root.style.setProperty('--output-background', '#1F2937');
        
    } else {
        root.style.setProperty('--output-background', '#F4F4F4');
        
    }
}


// logging the calculated values to the console
submitButton.addEventListener("click",function(){
   outputContainer.style.display = "block";
   userInputContainer.style.borderRadius = "0.75rem 0.75rem 0 0"
   render()
})

//switching the theme 
console.log(darkTheme)
setTheme()
