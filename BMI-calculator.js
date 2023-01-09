//Create a BMI calculator.
// Formula: weight (kg) / [height (m)]2
// The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters.


// let weightInKilo = 65;
// let heightinFeet = 5;
// let heightPlusInches = 3;


calcBMI = (weightInKilo, heightinFeet, heightPlusInches) => {    
        const  heightInMeter = ((heightinFeet * 30.48) / 100) + (heightPlusInches * 0.0254);
        const heightSQR = heightInMeter * heightInMeter;
        const BMI = weightInKilo / heightSQR;
        console.log(`Your weight in kilogram is ${weightInKilo}kg and your height is ${heightinFeet}'${heightPlusInches} feet tall.`);
        console.log(`Height in meter is ${heightInMeter} and height squared is ${heightSQR}.\n`);
        console.log(`BMI = weight in kilograms (${weightInKilo}) / height squared (${heightSQR}).\n`);
        console.log(`Your BMI computation based on your weight and height is ${BMI}`);
        
        let result;
        
        if (BMI < 18.5) {
            result = "Underweight";
            console.log("Your result is underweight.")
        } else if (BMI > 18.5 && BMI < 24.99) {
            result = "Normal Weight";    
            console.log("Your result is normal weight.")
        } else if ( BMI > 25 && BMI <29.99) {
            result = "Overweight";
            console.log("Your result is overweight.")
        } else {
            result = "Obese";
            console.log("You are obese.")
        }      
        console.log('Please note that this result does not consider the age bracket');  
        return result;  
};

calcBMI(65,5,3);
