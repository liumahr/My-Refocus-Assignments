//Create a BMI calculator.
// Formula: weight (kg) / [height (m)]2
// The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters.

let weight = parseFloat(prompt('Please enter your weight in kilograms (kg)'));
let height = parseFloat(prompt('Please enter your height in meter(m), example: 1.70'));

function calcBMI() {        
    let heightSQR = height * height;
    let BMI = weight / heightSQR;
    console.log(`Your BMI computation based on your weight and height is ${BMI}`);
};

calcBMI();
console.log('Should we add the age?');