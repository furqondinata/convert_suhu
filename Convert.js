class Convert {
  constructor() {
    console.log("i'm the new object");
  }
  fromCelcius(to, num1) {
    if (to == "cel") {
      return num1;
    }
    if (to == "rea") {
      return (4 / 5) * num1;
    }
    if (to == "far") {
      return (9 / 5) * num1 + 32;
    }
     if (to == "kel") {
      return num1 + 273;
    }
  }
  fromReamur(to, num1) {
    if (to == "rea") {
      return num1;
    }
    if (to == "cel") {
      return (5 / 4) * num1;
    }
    if (to == "far") {
      return (9 / 4) * num1 + 32;
    }
      if (to == "kel") {
      return (5/ 4) * num1 + 273;
    }

  }
  fromFarenheit(to, num1) {
    if (to == "far") {
      return num1;
    }
    if (to == "cel") {
      const hasil = (5 / 9) * (num1 - 32);
       return parseFloat(hasil.toFixed(2));
    }
    if (to == "rea") {
       const hasil = (4 / 9) * (num1 - 32);
        return parseFloat(hasil.toFixed(2));
    }
     if (to == "kel") {
      const hasil = (num1 + 459.67) * 5/9;
      return parseFloat(hasil.toFixed(2));
    }
  }
  fromKelvin(to,num1){
    if (to == "kel") {
       return num1;
    }
     if (to == "cel") {
       return num1 - 273;
    }
      if (to == "rea") {
       const hasil = (4/5) *(num1-273);
       return  parseFloat(hasil.toFixed(2));
    }
     if (to == "far") {
       const hasil =num1 * 9/5-459.67;
        return parseFloat(hasil.toFixed(2));
    }

  }
}
module.exports = Convert;
