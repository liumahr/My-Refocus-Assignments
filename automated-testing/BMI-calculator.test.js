
const calcBMI = require("./BMI-calculator-copy")

test("Check if 40kg, 5'1 feet is underweight", () => {       
    expect(calcBMI(40, 5, 1)).toBe("Underweight");
});

test("Check if 50kg, 5'3 feet is normal weight.", () => {       
    expect(calcBMI(50, 5, 3)).toBe("Normal Weight");
});

test("Check if 73kg, 5'6 feet is overweight.", () => {       
    expect(calcBMI(73, 5, 6)).toBe("Overweight");
});