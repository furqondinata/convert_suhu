const Convert = require("./Convert");

//Celcius
const Celcius = new Convert;
//test celsius to reamur
test('test cel to rea', () => {
    expect(Celcius.fromCelcius('rea', 1)).toBe(0.8);
});
console.log(test);
//test celsius to celsius
test('test cel to cel', () => {
    expect(Celcius.fromCelcius('cel', 10)).toBe(10);
});
//test celsius to fahrenheit
test('test cel to far', () => {
    expect(Celcius.fromCelcius('far', 1)).toBe(33.8);
});
//test celsius to kelvin
test('test cel to kel', () => {
    expect(Celcius.fromCelcius('kel', 1)).toBe(274);
});

//Reamur
const Reamur = new Convert;
//test reamur to celcius
test('test rea to cel', () => {
    expect(Reamur.fromReamur('cel', 1)).toBe(1.25);
});

//test reamur to reamur
test('test rea to rea', () => {
    expect(Reamur.fromReamur('rea', 10)).toBe(10);
});
//test reamur to fahrenheit
test('test rea to far', () => {
    expect(Reamur.fromReamur('far', 1)).toBe(34.25);
});
//test reamur to kelvin
test('test rea to kel', () => {
    expect(Reamur.fromReamur('kel', 1)).toBe(274.25);
});

//Farenheit
const Farenheit = new Convert;
//test farenheit to celcius
test('test far to cel', () => {
    expect(Farenheit.fromFarenheit('cel', 1)).toBe(-17.22);
});

//test farenheit to farenheit
test('test far to far', () => {
    expect(Farenheit.fromFarenheit('far', 10)).toBe(10);
});
//test farenheit to reamur
test('test far to rea', () => {
    expect(Farenheit.fromFarenheit('rea', 1)).toBe(-13.78);
});
//test farenheit to kelvin
test('test far to kel', () => {
    expect(Farenheit.fromFarenheit('kel', 1)).toBe(255.93);
});

//Kelvin
const Kelvin = new Convert;
//test kelvin to celcius
test('test kel to cel', () => {
    expect(Kelvin.fromKelvin('cel', 1)).toBe(-272);
});

//test kelvin to kelvin
test('test kel to kel', () => {
    expect(Kelvin.fromKelvin('kel', 10)).toBe(10);
});
//test kelvin to fahrenheit
test('test kel to far', () => {
    expect(Kelvin.fromKelvin('far', 1)).toBe(-457.87);
});
//test kelvin to reamur
test('test kel to rea', () => {
    expect(Kelvin.fromKelvin('rea', 1)).toBe(-217.6);
});
