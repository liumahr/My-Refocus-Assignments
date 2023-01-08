//Create a BMI calculator.
// Formula: weight (kg) / [height (m)]2
// The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters.


let weightInKilo = 65;
let heightinFeet = 5;
let heightPlusInches = 3;


function calcBMI() {     
    let  heightInMeter = ((heightinFeet * 30.48) / 100) + (heightPlusInches * 0.0254);
    let heightSQR = heightInMeter * heightInMeter;
    let BMI = weightInKilo / heightSQR;
    console.log(`Your weight in kilogram is ${weightInKilo}kg and your height is ${heightinFeet}'${heightPlusInches} feet tall.`);
    console.log(`Height in meter is ${heightInMeter} and height squared is ${heightSQR}.`);
    console.log(`BMI = weight in kilograms (${weightInKilo}) / height squared (${heightSQR}) and your BMI is ${BMI}.`);
    // console.log(`Your BMI computation based on your weight and height is ${BMI}`);
    console.log('Please note that this result does not consider the age bracket');
};

calcBMI();
