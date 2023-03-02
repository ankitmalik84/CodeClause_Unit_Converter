function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;

  if (fromUnit === "meter") {
    if (toUnit === "centimeter") {
      result = inputValue * 100;
    } else if (toUnit === "inch") {
      result = inputValue * 39.37;
    } else if (toUnit === "foot") {
      result = inputValue * 3.28;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "centimeter") {
    if (toUnit === "meter") {
      result = inputValue / 100;
    } else if (toUnit === "inch") {
      result = inputValue / 2.54;
    } else if (toUnit === "foot") {
      result = inputValue / 30.48;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "inch") {
    if (toUnit === "meter") {
      result = inputValue / 39.37;
    } else if (toUnit === "centimeter") {
      result = inputValue * 2.54;
    } else if (toUnit === "foot") {
      result = inputValue / 12;
    } else {
      result = inputValue;
    }
  } else if (fromUnit === "foot") {
    if (toUnit === "meter") {
      result = inputValue / 3.28;
    } else if (toUnit === "centimeter") {
      result = inputValue * 30.48;
    } else if (toUnit === "inch") {
      result = inputValue * 12;
    } else {
      result = inputValue;
    }
  }

  document.getElementById("result").innerHTML =
    result.toFixed(2) + " " + toUnit;
}
